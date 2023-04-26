import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { Route } from "./routes/index.js";

const app = express();

app.use(express.json());
dotenv.config();
try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("successful");
} catch (error) {
  console.log("fail");
}

const port = process.env.PORT || 3000;
Route(app);

app.listen(port, () => {
  console.log("hello");
  console.log(`http://localhost:${port}/api`);
});
