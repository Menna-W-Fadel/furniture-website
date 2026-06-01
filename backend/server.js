const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { cartItems } = req.body;

    // calculate total
    const total = cartItems.reduce((acc, item) => {
      return acc + item.finalPrice * item.quantity;
    }, 0);

    // Stripe expects cents
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});