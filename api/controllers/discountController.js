import { Discount } from "../models/Discount.js";
class DiscountController {
  //create product
  async post(req, res) {
    const newDiscount = new Discount(req.body);
    try {
      const savedDiscount = await newDiscount.save();
      res.status(200).json(savedDiscount);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //DELETE
  async delete(req, res) {
    try {
      await Discount.findByIdAndDelete(req.params.id);
      res.status(200).json("Discount has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //GET PRODUCT
  async get(req, res) {
    try {
      const discount = await Discount.find({ code: req.params.code });
      res.status(200).json(discount);
    } catch (err) {
      res.status(500);
    }
  }
}
export const discountController = new DiscountController();
