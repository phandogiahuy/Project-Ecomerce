import { transporter } from "../middleware/transporterMail.js";
import { Order } from "../models/Order.js";
import { User } from "../models/User.js";
import { catchAsync } from "../utils/catchAsync.js";
const orderController = {
  async create(req, res) {
    const newOrder = new Order(req.body);
    // console.log(req.body);
    const savedOrder = await newOrder.save();
    if (req.body.userId != 0) {
      await User.findByIdAndUpdate(req.body.userId, {
        $push: { order: savedOrder._id },
      });
    }
    const product = [];
    const productDetail = [];
    req.body.products.forEach((item) => product.push(item));
    product.forEach((item) => productDetail.push(item.product.title));
    const orderDetail = {
      product,
      productDetail,
      name: req.body.name,
      phone: req.body.phone,
      mail: req.body.mail,
      shipping: req.body.shipping,
      address: req.body.address,
      total: req.body.total,
      payment: req.body.payment,
    };
    const mailOptions = {
      from: "Aroma Delute Coffee",
      to: req.body.mail, // Use the user's provided email
      subject: "Order Confirmation Aroma Coffee",
      html: `<h1>Order Confirmation</h1>
      <h2>Order Details</h2>
      <ul>
        ${orderDetail.productDetail
          .map(
            (item, index) =>
              `<li><b>${item} - ${orderDetail.product[index].quantity} pack - ${orderDetail.product[index].price}$</b>  </li>`
          )
          .join("")}
      </ul>
      <p><b>Shipping:</b> ${orderDetail.shipping}$</p>
      <p><b>Total Amount:</b> ${orderDetail.total}$</p>
      <h2>Customer Information</h2>
      <p><b>Name:</b> ${orderDetail.name}</p>
      <p><b>Email:</b> ${orderDetail.mail}</p>
      <p><b>Payment:</b> ${orderDetail.payment}</p>
      <p><b>Address:</b> ${orderDetail.address}</p>
      <h3>Thank you for your order on Aroma Website!</h3>
      `,
    };
    await transporter.sendMail(mailOptions);

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

  async deleteId(req, res) {
    await Order.findByIdAndDelete(req.params.id);
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

  // async showIncomeMonthly(req, res) {
  //   const productId = req.query.pid;
  //   const date = new Date();
  //   const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  //   const previousMonth = new Date(
  //     new Date().setMonth(lastMonth.getMonth() - 1)
  //   );

  //   const income = await Order.aggregate([
  //     {
  //       $match: {
  //         createdAt: { $gte: previousMonth },
  //         ...(productId && {
  //           products: { $elemMatch: { productId } },
  //         }),
  //       },
  //     },
  //     {
  //       $project: {
  //         month: { $month: "$createdAt" },
  //         sales: "$amount",
  //       },
  //     },
  //     {
  //       $group: {
  //         _id: "$month",
  //         total: { $sum: "$sales" },
  //       },
  //     },
  //   ]);
  //   res.status(200).json(income);
  // },
};
Object.keys(orderController).forEach((key) => {
  orderController[key] = catchAsync(orderController[key]);
});
export { orderController };
