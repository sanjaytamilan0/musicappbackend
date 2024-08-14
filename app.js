import express, { json } from 'express';

import router from "./router/user.js"
import http from "http";
import cors from 'cors';


const app = express();

app.use(express.json({
    limit: "10mb"
}));

app.use(cors());
app.use("/user",router);


const server = http.createServer(app);
const PORT = 4000;

server.listen(PORT, () => {
    console.log("server is running on", PORT)
})