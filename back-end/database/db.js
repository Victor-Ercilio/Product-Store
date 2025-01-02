import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB(){
    try {
        const connect_string = process.env.CONNECTION_STR ?? "";
        const conn = await mongoose.connect(connect_string);
        console.log(`Sucesso em conectar ao BD: ${conn.connection.host}`);
    } catch (error) {
        throw error;
    }
}