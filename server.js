import express from 'express';
import mongoose from 'mongoose';


const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("App is Running");
});

app.listen(port, () => {
  console.log("App server is running ....");
});