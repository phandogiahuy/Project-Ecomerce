import Stripe from "stripe";
const KEY = process.env.STRIPE_KEY;
const stripe = new Stripe(KEY);

class StripeController {
  payment(req, res) {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  }
}
export const stripeController = new StripeController();
