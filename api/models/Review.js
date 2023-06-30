import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
export const Review = mongoose.model("Review", reviewSchema);
