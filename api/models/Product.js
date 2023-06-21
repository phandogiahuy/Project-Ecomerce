import mongoose from "mongoose";
import { Review } from "./Review.js";

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
    sale: {
      type: Number,
      default: 1,
    },
    img: {
      type: String,
      require: true,
    },
    process: {
      type: String,
    },
    place: {
      type: String,
    },
    flavor: {
      type: String,
    },
    categories: {
      type: Array,
      require: true,
    },
    price: {
      type: [Number],
    },
    sale: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);
export const Product = mongoose.model("Product", ProductSchema);
