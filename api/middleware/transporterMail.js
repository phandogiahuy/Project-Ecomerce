import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

export let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});
