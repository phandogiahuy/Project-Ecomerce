import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import { Route } from "./routes/index.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
dotenv.config();
Route(app);
app.use(errorMiddleware);
const port = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successful");
    app.listen(port, () => {
      console.log(`localhost:${port}/api`);
    });
  })
  .catch(() => console.log("Fail"));
