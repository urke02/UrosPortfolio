import { MongoClient } from "mongodb";

const options = {};

let client;
let clientPromise;

export default function getMongoClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Please add MONGODB_URI to .env.local");
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }

    clientPromise = global._mongoClientPromise;
  } else if (!clientPromise) {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }

  return clientPromise;
}
