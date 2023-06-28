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
  //find Discount
  async get(req, res) {
    try {
      const discount = await Discount.find({ code: req.params.code });
      if (!discount.length) {
        res.status(500).json({ message: "Code Discount is Wrong" });
      }
      res.status(200).json(discount);
    } catch (err) {
      res.status(500);
    }
  }
  async update(req, res) {
    try {
      const updateDiscount = await Discount.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateDiscount);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //GET PRODUCT
  async showDiscount(req, res) {
    try {
      const discount = await Discount.findById(req.params.id);
      res.status(200).json(discount);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async getAll(req, res) {
    try {
      const discount = await Discount.find();
      res.status(200).json(discount);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
export const discountController = new DiscountController();
