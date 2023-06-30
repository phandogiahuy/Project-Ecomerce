import { Router } from "express";
import { verifyTokenAndAdmin } from "../middleware/JWT.js";
import { productController } from "../controllers/productController.js";

export const productRouter = Router();
productRouter.post("/", verifyTokenAndAdmin, productController.create);
productRouter.put("/:id", verifyTokenAndAdmin, productController.update);
productRouter.delete("/:id", verifyTokenAndAdmin, productController.delete);
productRouter.get("/find/:id", productController.showProduct);
productRouter.get("/", productController.showAllProduct);
productRouter.get("/comment", productController.showCommentProduct);
