import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import { dbconnect } from "./dbconnect/dbconnect.js";
import routes from "./routes/routes.js"

const app = express();
dotenv.config();

app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json());

app.use(routes);


app.listen(5000, () => {
  console.log("Server is running");
  dbconnect();
});
