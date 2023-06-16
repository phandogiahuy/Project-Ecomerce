import { Order } from "../models/Order.js";
class OrderController {
  async create(req, res) {
    const newOrder = new Order(req.body);

    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //UPDATE
  async update(req, res) {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //DELETE
  async delete(req, res) {
    try {
      await Order.deleteMany({ status: "success" });
      res.status(200).json("Order has been deleted with type success");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //DELETE
  async deleteAll(req, res) {
    try {
      await Order.deleteMany();
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //GET USER ORDERS
  async showOrderUser(req, res) {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // //GET ALL

  async showAllOrder(req, res) {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // GET MONTHLY INCOME

  async showIncomeMonthly(req, res) {
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );

    try {
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
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
export const orderController = new OrderController();
