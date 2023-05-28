import Jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const generateAccessToken = (user) => {
  return Jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_KEY,
    {
      expiresIn: "60m",
    }
  );
};

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    Jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
      if (err) {
        return res.status(400).json("token not veryfy");
      }
      const user = await User.findById(payload.id);
      req.user = user;
      next();
    });
  } else {
    res.status(400).json("Invalid token");
  }
};

export const verifyTokenAndAuthorization = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(403).json("You are not alowed to do that!");
  }
};

export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};
