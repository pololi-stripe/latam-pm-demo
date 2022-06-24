const express = require("express");
const router = express.Router();

const stripe = require("stripe");
const brStripe = stripe(process.env.BR_SECRET_KEY, {
  apiVersion: "2020-03-02; pix_beta=v2;",
});

router.post("/create-br-checkout", async (req, res) => {
  const domain = req.header("host");

  try {
    const session = await brStripe.checkout.sessions.create({
      payment_method_types: ["card", "boleto", "pix"],
      line_items: [
        {
          price: "price_1IgHDpHUa8w99BmWXikz4IeQ",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.protocol}://${domain}/success`,
      cancel_url: `${req.protocol}://${domain}/cancel`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.log("Ohhhh nooo!");
    console.log(err);
  }
});

router.post("/create-pix-hosted-instructions", async (req, res) => {
  try {
    const intent = await brStripe.paymentIntents.create({
      amount: 1099,
      currency: "brl",
      payment_method_types: ["pix"],
      payment_method_data: { type: "pix" },
      confirm: true,
    });

    const { hosted_instructions_url } = intent.next_action.pix_display_qr_code;

    res.json({ url: hosted_instructions_url });
  } catch (err) {
    console.log("Ohhhh nooo!");
    console.log(err);
  }
});

router.post("/create-boleto-hosted-voucher", async (req, res) => {
  try {
    const intent = await brStripe.paymentIntents.create({
      amount: 1099,
      currency: "brl",
      payment_method_types: ["boleto"],
      payment_method_data: {
        type: "boleto",
        boleto: { tax_id: "000.000.000-00" },
        billing_details: {
          name: "Boleto Test",
          email: "boleto@test.com",
          address: {
            line1: "Rua Antônio Sanches Gomes, 990",
            city: "Sertãozinho",
            state: "SP",
            country: "BR",
            postal_code: "14177-075",
          },
        },
      },
      confirm: true,
    });

    const { hosted_voucher_url } = intent.next_action.boleto_display_details;

    res.json({ url: hosted_voucher_url });
  } catch (err) {
    console.log("Ohhhh nooo!");
    console.log(err);
  }
});

module.exports = router;
