import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";
import { Review } from "../models/Review.js";
class ReviewController {
  async create(req, res) {
    const newReview = new Review(req.body);
    try {
      const savedReview = await newReview.save();
      const product = await Product.findByIdAndUpdate(req.params.productId, {
        $push: { reviews: savedReview._id },
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //GET PRODUCT
  async showReview(req, res) {
    try {
      const review = await Review.find();
      res.status(200).json(review);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async deleteAll(req, res) {
    try {
      const review = await Review.deleteMany();
      res.status(200).json(review);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
export const reviewController = new ReviewController();
