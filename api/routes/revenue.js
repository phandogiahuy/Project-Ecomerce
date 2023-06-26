import { Router } from "express";
import { verifyTokenAndAdmin } from "../middleware/JWT.js";
import { revenueController } from "../controllers/revenueController.js";

export const revenueRouter = Router();
revenueRouter.post("/", verifyTokenAndAdmin, revenueController.create);
revenueRouter.get("/", revenueController.showAllRevenue);
revenueRouter.delete("/", revenueController.deleteAll);
