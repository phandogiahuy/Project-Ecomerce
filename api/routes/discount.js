import { Router } from "express";

import { discountController } from "../controllers/discountController.js";
import { verifyTokenAndAdmin } from "../middleware/JWT.js";

export const discountRouter = Router();
discountRouter.post("/", verifyTokenAndAdmin, discountController.post);
discountRouter.get("/find/:code", discountController.get);
discountRouter.get(
  "/:id",
  verifyTokenAndAdmin,
  discountController.showDiscount
);
discountRouter.put("/:id", verifyTokenAndAdmin, discountController.update);

discountRouter.get("/", discountController.getAll);
discountRouter.delete("/:id", verifyTokenAndAdmin, discountController.delete);
