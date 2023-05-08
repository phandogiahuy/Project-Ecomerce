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
      const user = User.findOne({ email: req.body.email });
      if (user) {
        console.log("asd");
        return res.status(400).json({ message: "Email is existed" });
      }

      const newUser = User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      //save user vào database and response

      res.status(200).json(newUser);
    } catch (error) {
      return res.json(error);
    }
  }
  //login account
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(500).json("Email or password is wrong");
      } else {
        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!validPassword) {
          return res.status(200).json("Email or password is wrong");
        } else {
          const accessToken = generateAccessToken(user);
          res.status(200).json({
            email: user.email,
            isAdmin: user.isAdmin,
            accessToken,
            id: user._id,
          });
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export const authController = new AuthController();
