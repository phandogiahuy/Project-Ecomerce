import { Router } from "express";

import { discountController } from "../controllers/discountController.js";

export const discountRouter = Router();
discountRouter.post("/", discountController.post);
discountRouter.get("/:code", discountController.get);
discountRouter.delete("/:code", discountController.delete);
