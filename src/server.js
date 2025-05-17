import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; 
dotenv.config();
import authRoutes from './routes/auth.route.js';
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from './lib/db.js';
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat",chatRoutes);

app.get("/", (req, res) => {
  res.send("App is Running");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});