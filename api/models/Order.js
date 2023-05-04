import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        size: {
          type: Number,
        },
        type: {
          type: String,
        },
      },
    ],
    amount: {
      type: Number,
      require: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", OrderSchema);
