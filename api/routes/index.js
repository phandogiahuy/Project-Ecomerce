import { authRouter } from "./auth.js";
import { cartRouter } from "./cart.js";
import { discountRouter } from "./discount.js";
import { momoRouter } from "./momo.js";
import { orderRouter } from "./order.js";
import { productRouter } from "./product.js";
import { revenueRouter } from "./revenue.js";
import { reviewRouter } from "./review.js";
import { stripeRouter } from "./stripe.js";
import { userRouter } from "./user.js";

export function Route(app) {
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/checkout", stripeRouter);
  app.use("/api/discount", discountRouter);
  app.use("/api/reviews", reviewRouter);
  app.use("/api/momo", momoRouter);
  app.use("/api/revenue", revenueRouter);
}
