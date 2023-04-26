import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    categories: {
      type: Array,
      require: true,
    },
    size: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", ProductSchema);
