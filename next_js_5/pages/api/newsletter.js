import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method == "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({
        message: "Invalid Email address",
      });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://guptaakash2090:8QP11bthmfJYLPmb@cluster0.v18i6r3.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("newsletter").insertOne({
      email: userEmail,
    });

    client.close();

    console.log(userEmail);
    res.status(201).json({
      message: "Signed Up !",
    });
  }
}

export default handler;
