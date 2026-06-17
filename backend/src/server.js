import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import notRouter from "./routes/noteRoutes.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();
// middleware
app.use(express.json());
app.use("/api/notes", notRouter);

app.listen(PORT, () => {
    console.log("server started on PORT:",PORT);
});