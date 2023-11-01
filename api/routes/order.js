import { Router } from "express";
import { orderController } from "../controllers/orderController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/JWT.js";

export const orderRouter = Router();
orderRouter.post("/", orderController.create);
orderRouter.put("/:id", verifyTokenAndAdmin, orderController.update);
orderRouter.delete("/success", verifyTokenAndAdmin, orderController.delete);
orderRouter.delete("/:id", orderController.deleteId);
orderRouter.delete("/", orderController.deleteAll);
orderRouter.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  orderController.showOrderUser
);
orderRouter.get("/", verifyTokenAndAdmin, orderController.showAllOrder);
orderRouter.get("/success/:id", orderController.showAllOrderSuccessful);
orderRouter.get("/pending", orderController.showAllOrderPending);

// orderRouter.get(
//   "/income",
//   verifyTokenAndAdmin,
//   orderController.showIncomeMonthly
// );
