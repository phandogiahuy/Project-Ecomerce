import { Order } from "../models/Order.js";
import { User } from "../models/User.js";
import { catchAsync } from "../utils/catchAsync.js";
const orderController = {
  async create(req, res) {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    if (req.body.userId != 0) {
      await User.findByIdAndUpdate(req.body.userId, {
        $push: { order: savedOrder._id },
      });
    }

    res.status(200).json(savedOrder);
  },

  //UPDATE
  async update(req, res) {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  },

  //DELETE
  async delete(req, res) {
    await Order.deleteMany({ status: "success" });
    res.status(200).json("Order has been deleted with type success");
  },
  //DELETE
  async deleteAll(req, res) {
    await Order.deleteMany();
    res.status(200).json("Order has been deleted...");
  },

  //GET USER ORDERS
  async showOrderUser(req, res) {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  },

  // //GET ALL

  async showAllOrder(req, res) {
    const orders = await Order.find();
    res.status(200).json(orders);
  },
  async showAllOrderSuccessful(req, res) {
    const orders = await Order.find({ status: "success" });
    res.status(200).json(orders);
  },
  async showAllOrderPending(req, res) {
    const orders = await Order.find({ status: "pending" });
    res.status(200).json(orders);
  },

  // GET MONTHLY INCOME

  async showIncomeMonthly(req, res) {
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );

    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  },
};
Object.keys(orderController).forEach((key) => {
  orderController[key] = catchAsync(orderController[key]);
});
export { orderController };
