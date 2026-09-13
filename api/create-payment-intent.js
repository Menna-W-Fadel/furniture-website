import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      return res.status(500).json({ error: "STRIPE_SECRET_KEY is not configured" });
    }
    const stripe = new Stripe(key);

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

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
