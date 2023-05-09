import { Router } from "express";

import { discountController } from "../controllers/discountController.js";

export const discountRouter = Router();
discountRouter.post("/", discountController.post);
discountRouter.get("/find/:code", discountController.get);
discountRouter.get("/", discountController.getAll);
discountRouter.delete("/:code", discountController.delete);
