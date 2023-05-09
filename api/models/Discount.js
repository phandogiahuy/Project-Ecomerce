import mongoose from "mongoose";

const DiscountShema = new mongoose.Schema(
  {
    code: {
      type: String,
      require: true,
      unique: true,
    },
    sale: {
      type: Number,
    },
    limit: {
      type: Number,
    },
  },
  { timestamps: true }
);
export const Discount = mongoose.model("Discount", DiscountShema);
