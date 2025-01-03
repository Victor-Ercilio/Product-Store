import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB(){
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Conexão com o MongoDB (${conn.connection.name}): OK`);
    } catch (error) {
        throw error;
    }
}