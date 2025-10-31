import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import notesRouter from "./routes/notes.js";

dotenv.config();

const app = express();
app.use(express.json());

// DB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// Routes
app.use("/notes", notesRouter);
app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});