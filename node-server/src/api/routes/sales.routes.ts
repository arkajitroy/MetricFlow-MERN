import express from "express";
import { getSales } from "../controller/sales/sales.controller";

const router = express.Router();

router.get("/sales", getSales);

export default router;
