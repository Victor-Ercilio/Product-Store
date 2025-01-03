import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./database/db.js";
import router from "./routes/product.route.js";

dotenv.config();

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const app = express();

app.use(express.json());

app.use('/api/products', router);

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.info(`Server is running at ${BASE_URL}${PORT}`);
    } catch (error) {
        console.error(error.message);      
    }
})