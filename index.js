import express from "express";
import cors from "cors";
import { auth } from "./auth.js";
import { configDotenv } from "dotenv";
import dns from "node:dns";
import { toNodeHandler } from "better-auth/node";
dns.setServers(["1.1.1.1","8.8.8.8"]);

configDotenv();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);


app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server Running");
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Better Auth app listening on port ${port}`);
});