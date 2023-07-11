import { Router } from "express";
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} from "../middleware/JWT.js";
import { userController } from "../controllers/userController.js";

export const userRouter = Router();
userRouter.put("/:id", verifyToken, userController.update);
userRouter.delete("/:id", verifyTokenAndAdmin, userController.delete);
userRouter.get("/find/:id", userController.show);
userRouter.get("/", verifyTokenAndAdmin, userController.showAll);
userRouter.get("/stats", verifyTokenAndAdmin, userController.showUserStats);
userRouter.get("/me", verifyToken, userController.getMe);
