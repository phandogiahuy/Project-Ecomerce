import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import { catchAsync } from "../utils/catchAsync.js";

const userController = {
  //update user
  async update(req, res) {
    if (req.body.password != 0) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    } else {
      console.log(req.body);
      delete req.body.password;
      console.log(req.body);
    }

    await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json("account has been updated");
  },
  //delete user
  async delete(req, res) {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account has been deleted");
  },
  //show a user
  async show(req, res) {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  },
  async getMe(req, res) {
    res.json(req.user);
  },
  //show all user
  async showAll(req, res) {
    const query = req.query.new;
    const user = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(user);
  },
  //show month of user
  //.id_ tháng aggreate giống grouby  sql
  async showUserStats(req, res) {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  },
};
Object.keys(userController).forEach((key) => {
  userController[key] = catchAsync(userController[key]);
});
export { userController };
