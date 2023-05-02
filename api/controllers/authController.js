import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { generateAccessToken } from "../middleware/JWT.js";

class AuthController {
  //register account
  async register(req, res) {
    try {
      //tạo mật khẩu mới
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      //tạo tài khoản
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      //save user vào database and response
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (error) {
      return res.json(error);
    }
  }
  //login account
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).send("Email or Password is wrong");
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).send("Email or Password is wrong");
      } else {
        const accessToken = generateAccessToken(user);
        res.status(200).json({
          username: user.email,
          isAdmin: user.isAdmin,
          accessToken,
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export const authController = new AuthController();
