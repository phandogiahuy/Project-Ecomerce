import { Discount } from "../models/Discount.js";
import { catchAsync } from "../utils/catchAsync.js";
const discountController = {
  //create product
  async post(req, res) {
    const newDiscount = new Discount(req.body);
    const savedDiscount = await newDiscount.save();
    res.status(200).json(savedDiscount);
  },
  //DELETE
  async delete(req, res) {
    await Discount.findByIdAndDelete(req.params.id);
    res.status(200).json("Discount has been deleted...");
  },
  //find Discount
  async get(req, res) {
    const discount = await Discount.find({ code: req.params.code });
    if (!discount.length) {
      res.status(500).json({ message: "Code Discount is Wrong" });
    }
    res.status(200).json(discount);
  },
  async update(req, res) {
    const updateDiscount = await Discount.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateDiscount);
  },
  //GET PRODUCT
  async showDiscount(req, res) {
    const discount = await Discount.findById(req.params.id);
    res.status(200).json(discount);
  },
  async getAll(req, res) {
    const discount = await Discount.find();
    res.status(200).json(discount);
  },
};
Object.keys(discountController).forEach((key) => {
  discountController[key] = catchAsync(discountController[key]);
});
export { discountController };
