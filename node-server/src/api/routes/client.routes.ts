import express from "express";
import { getProducts } from "../controller/client/getProducts.controller";
import { getCustomers } from "../controller/client/getCustomers.contoller";
import { getTransactions } from "../controller/client/getTransactions.controller";
import { getGeography } from "../controller/client/getGeography.controller";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
// router.get("/geography", getGeography);

export default router;
