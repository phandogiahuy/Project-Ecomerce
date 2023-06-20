import { Router } from "express";

import { momoController } from "../controllers/momoController.js";

export const momoRouter = Router();

momoRouter.post("/", momoController.payment);
