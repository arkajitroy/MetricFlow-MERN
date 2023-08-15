import express from "express";
import { getUser } from "../controller/auth/getUser.controller";
import { getDashboardStats } from "../controller/auth/getDashboardStats.controller";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
