import { MongoClient } from "mongodb";

async function connectDataBase() {
  const client = await MongoClient.connect(
    "mongodb+srv://guptaakash2090:8QP11bthmfJYLPmb@cluster0.v18i6r3.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  await db.collection("newsletter").insertOne(document);
}

async function handler(req, res) {
  if (req.method == "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({
        message: "Invalid Email address",
      });
      return;
    }

    let client;
    try {
      client = await connectDataBase();
    } catch (error) {
      res.status(500).json({
        message: "Connecting to the database failed !",
      });
      return;
    }

    try {
      await insertDocument(client, {
        email: userEmail,
      });
      client.close();
    } catch (error) {
      res.status(500).json({
        message: "Inserting data ailed !",
      });
      return;
    }

    console.log(userEmail);
    res.status(201).json({
      message: "Signed Up !",
    });
  }
}

export default handler;
