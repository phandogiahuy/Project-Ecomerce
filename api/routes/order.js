import { Router } from "express";
import { orderController } from "../controllers/orderController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/JWT.js";

export const orderRouter = Router();
orderRouter.post("/", verifyToken, orderController.create);
orderRouter.put("/:id", verifyTokenAndAdmin, orderController.update);
orderRouter.delete("/:id", verifyTokenAndAdmin, orderController.delete);
orderRouter.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  orderController.showOrderUser
);
orderRouter.get("/", verifyTokenAndAdmin, orderController.showAllOrder);
orderRouter.get(
  "/income",
  verifyTokenAndAdmin,
  orderController.showIncomeMonthly
);
