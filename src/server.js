import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import authRoutes from './routes/auth.route.js';

import { connectDB } from './lib/db.js';
const app = express();
const port = process.env.PORT || 5000;


app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("App is Running");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});