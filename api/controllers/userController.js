import { User } from "../models/User.js";
import bcrypt from "bcrypt";

class UserController {
  //update user
  async update(req, res) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).json(error);
      }
    }

    try {
      await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("account has been updated");
    } catch (error) {
      res.status(502).json(error);
    }
  }
  //delete user
  async delete(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //show a user
  async show(req, res) {
    try {
      const user = await User.findById(req.params.id);
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getMe(req, res) {
    res.json(req.user);
  }
  //show all user
  async showAll(req, res) {
    const query = req.query.new;
    try {
      const user = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  //show month of user
  //.id_ tháng aggreate giống grouby  sql
  async showUserStats(req, res) {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
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
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
export const userController = new UserController();
