import express from "express";
import { Request, Response} from "express";
import { config } from "dotenv";

config();

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send({status: "ok"});
})

app.listen(PORT, () => {
    console.info(`Server is running at ${BASE_URL}${PORT}`);
})