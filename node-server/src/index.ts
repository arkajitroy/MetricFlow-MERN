import express, { Request, Response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { connectToDatabase } from "./config/db";
import {
  authRoutes,
  clientRoutes,
  managementRoutes,
  salesRoutes,
} from "./api/routes";

// constants
const app = express();
const PORT = 4000;

// Middleware and Configurations
app.use(express.json());
dotenv.config();
app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
connectToDatabase();

// ROUTES
app.use("/client", clientRoutes);
app.use("/auth", authRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running");
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // ****** RUN ONLY ONCE (Injecting the data) [uncomment -> import -> run | do for each lines] ******
  // UserModel.insertMany(dataUser);
  // ProductModel.insertMany(dataProduct);
  // ProductStatModel.insertMany(dataProductStat);
  // TransactionModel.insertMany(dataTransaction);
  // OverallStatModel.insertMany(dataOverallStat);
});
