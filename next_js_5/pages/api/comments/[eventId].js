import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://guptaakash2090:8QP11bthmfJYLPmb@cluster0.v18i6r3.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    // add server side validation

    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid Input !",
      });
      return;
    }

    const newComment = {
      // id: new Date().toISOString(),
      email,
      name,
      text,
      eventId,
    };

    console.log(newComment);

    const db = client.db();
    const results = await db.collection("comments").insertOne(newComment);

    console.log("results", results);

    newComment.id = results.insertedId;

    res.status(201).json({
      message: "Added Comment !",
      comment: newComment,
    });
  }

  if (req.method === "GET") {
    const db = client.db();
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({
      comments: documents,
    });
  }

  client.close();
}

export default handler;
