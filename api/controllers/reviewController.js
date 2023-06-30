import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";
import { Review } from "../models/Review.js";
import { catchAsync } from "../utils/catchAsync.js";
const reviewController = {
  async create(req, res) {
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    const product = await Product.findByIdAndUpdate(req.params.productId, {
      $push: { reviews: savedReview._id },
    });
    res.status(200).json(product);
  },
  //GET PRODUCT
  async showReview(req, res) {
    const review = await Review.find();
    res.status(200).json(review);
  },
  async deleteAll(req, res) {
    const review = await Review.deleteMany();
    await Product.updateMany(
      { $expr: { $gt: [{ $size: "$reviews" }, 0] } },
      { $set: { reviews: [] } }
    );
    res.status(200).json(review);
  },
};
Object.keys(reviewController).forEach((key) => {
  reviewController[key] = catchAsync(reviewController[key]);
});
export { reviewController };
