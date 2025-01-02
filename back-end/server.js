import express from "express";
import { config } from "dotenv";
import { connectDB } from "./database/db.js";

config();

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const app = express();

app.get('/', (req, res) => {
    res.send({status: "ok"});
})


app.listen(PORT, () => {
    console.info(`Server is running at ${BASE_URL}${PORT}`);
    console.info(`Server change again`);
})