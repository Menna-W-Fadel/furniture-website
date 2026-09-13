const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

dotenv.config();

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/api/create-payment-intent", async (req, res) => {
  try {
    const { cartItems } = req.body;

    const total = cartItems.reduce((acc, item) => {
      return acc + item.finalPrice * item.quantity;
    }, 0);

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

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on port", process.env.PORT || 4000);
});
