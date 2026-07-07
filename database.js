import { configDotenv } from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dns from "node:dns";
dns.setServers(["1.1.1.1","8.8.8.8"]);

configDotenv()
export let db = null;
export const connectDB = async () => {
  if (db) return db;
  const client = new MongoClient(process.env.DB_URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  // await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  db = client.db("aftdb");
  return db;
};

export const myDatabase = await connectDB();

export const getCollection = async (collectionName) => {
  try {
    const databse = await connectDB();
    return databse.collection(collectionName);
  } catch (error) {
    console.log("faild to fetch collection Error:", error);
  }
};

