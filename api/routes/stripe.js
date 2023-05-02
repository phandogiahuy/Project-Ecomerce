import { Router } from "express";

import { stripeController } from "../controllers/stripeController.js";

export const stripeRouter = Router();

stripeRouter.post("/payment", stripeController.payment);
