
require("dotenv").config();
import mongoose from "mongoose";

const MONGODB_URI='mongodb+srv://anjali1724:anjali1724@cluster0.vy2ucne.mongodb.net/foodOrderingDb?retryWrites=true&w=majority'; 

const DATABASE_URL = process.env.MONGODB_URI || MONGODB_URI;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () =>{
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
