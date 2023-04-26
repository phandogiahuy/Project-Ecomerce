import { Router } from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/JWT.js";
import { cartController } from "../controllers/cartController.js";

export const cartRouter = Router();
cartRouter.post("/", verifyTokenAndAuthorization, cartController.create);
cartRouter.put("/:id", verifyTokenAndAuthorization, cartController.update);
cartRouter.delete("/:id", verifyTokenAndAuthorization, cartController.delete);
cartRouter.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  cartController.showCart
);
cartRouter.get("/", verifyTokenAndAdmin, cartController.showAllCart);
