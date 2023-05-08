import { Router } from "express";
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/JWT.js";
import { userController } from "../controllers/userController.js";

export const userRouter = Router();
userRouter.put("/:id", verifyTokenAndAuthorization, userController.update);
userRouter.delete("/:id", verifyTokenAndAuthorization, userController.delete);
userRouter.get("/find/:id", userController.show);
userRouter.get("/", verifyTokenAndAdmin, userController.showAll);
userRouter.get("/stats", verifyTokenAndAdmin, userController.showUserStats);
