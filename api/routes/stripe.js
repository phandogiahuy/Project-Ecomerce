import { Router } from "express";

import { stripeController } from "../controllers/stripeController.js";
import { Product } from "../models/Product.js";

export const stripeRouter = Router();

stripeRouter.post("/payment", stripeController.payment);
