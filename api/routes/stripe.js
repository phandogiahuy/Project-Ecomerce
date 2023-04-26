import { Router } from "express";

import { stripeController } from "../controllers/stripeController.js";

export const authRouter = Router();

stripeController.get("/payment", stripeController.payment);
