import { Revenue } from "../models/Revenue.js";

class RevenueController {
  async create(req, res) {
    // products.products.forEach((product) => {
    //   id.push(product.product._id);
    // });
    const exist = [];
    const existId = [];
    req.body.orders.products.forEach(async (product) => {
      // const existProduct = await Revenue.findOne({
      //   productId: product.product._id,
      // });
      if (!existId.includes(product.product._id)) {
        // existProduct.amount += product.quantity;
        // existProduct.save();
        exist.push({ id: product.product._id, amount: product.quantity });
        existId.push(product.product._id);
      } else {
        exist.forEach((productItem) => {
          if (productItem.id === product.product._id) {
            productItem.amount += product.quantity;
          }
        });
      }
    });
    exist.forEach(async (product) => {
      const existProduct = await Revenue.findOne({ productId: product.id });
      if (existProduct) {
        existProduct.amount += product.amount;
        existProduct.save();
      } else {
        const newRevenue = new Revenue({
          productId: product.id,
          amount: product.amount,
        });
        newRevenue.save();
      }
    });
    res.status(200).json("xong");
    //
  }

  //

  // }

  // //GET ALL

  async showAllRevenue(req, res) {
    try {
      const revenues = await Revenue.find()
        .populate("productId")
        .limit(5)
        .sort({ amount: -1 });
      res.status(200).json(revenues);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //DELETE
  async deleteAll(req, res) {
    try {
      await Revenue.deleteMany();
      res.status(200).json("revenue has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
export const revenueController = new RevenueController();
