import { Cart } from "../models/Cart.js";
import { catchAsync } from "../utils/catchAsync.js";
const cartController = {
  async create(req, res) {
    const newCart = new Cart(req.body);

    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  },

  //UPDATE
  async update(req, res) {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  },

  //DELETE
  async delete(req, res, next) {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  },

  //GET USER CART
  async showCart(req, res) {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  },
  // //GET ALL

  async showAllCart(req, res) {
    const carts = await Cart.find();
    res.status(200).json(carts);
  },
};
Object.keys(cartController).forEach((key) => {
  cartController[key] = catchAsync(cartController[key]);
});
export { cartController };
