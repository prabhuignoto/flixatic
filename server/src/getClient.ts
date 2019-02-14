import { config } from "dotenv";
import { MongoClient } from "mongodb";

if (process.env.NODE_ENV === "development") {
  config();
}

export default new MongoClient(process.env.MONGO_DB_URL as string);
