import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    name: {
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
    total: {
      type: Number,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    address: {
      type: Object,
      required: true,
    },
    payment: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", OrderSchema);
