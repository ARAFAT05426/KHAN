import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  console.log(uri);
  throw new Error("Please add your Mongo URI to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to preserve MongoClient across hot-reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, avoid using global variables
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  clientPromise = client.connect();
}

const connectDB = async () => {
  const client = await clientPromise;
  return client.db(dbName);
};

export { client, clientPromise, connectDB };
