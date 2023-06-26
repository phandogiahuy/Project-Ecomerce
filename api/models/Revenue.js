import mongoose from "mongoose";

const RevenueShema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);
export const Revenue = mongoose.model("Revenue", RevenueShema);
