import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { generateAccessToken } from "../middleware/JWT.js";
import { catchAsync } from "../utils/catchAsync.js";

const authController = {
  //register account
  async register(req, res) {
    //tạo mật khẩu mới
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //tạo tài khoản
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "Email is existed" });
    }

    const newUser = User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //save user vào database and response

    res.status(200).json(newUser);
  },
  //login account
  async login(req, res) {
    const user = await User.findOne({ email: req.body.email }).populate(
      "order"
    );
    if (!user) {
      return res.status(500).json("Email or password is wrong");
    } else {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(500).json("Email or password is wrong");
      } else {
        const accessToken = generateAccessToken(user);
        res.status(200).json({
          email: user.email,
          username: user.username,
          isAdmin: user.isAdmin,
          password: req.body.password,
          order: user.order,
          accessToken,
          _id: user._id,
        });
      }
    }
  },
};
Object.keys(authController).forEach((key) => {
  authController[key] = catchAsync(authController[key]);
});
export { authController };
