import { Router } from "express";
import { reviewController } from "../controllers/reviewController.js";

export const reviewRouter = Router();
reviewRouter.post("/:productId", reviewController.create);
reviewRouter.get("", reviewController.showReview);
