const express = require("express");
const router = express.Router();

const stripe = require("stripe");
const mxStripe = stripe(process.env.MX_SECRET_KEY);

router.post("/create-mx-checkout", async (req, res) => {
  const domain = req.header("host");

  try {
    const session = await mxStripe.checkout.sessions.create({
      customer: "cus_LA0jP0cx5LpVN5",
      payment_method_types: ["card", "oxxo", "customer_balance"],
      payment_method_options: {
        customer_balance: {
          funding_type: "bank_transfer",
          bank_transfer: {
            type: "mx_bank_transfer",
          },
        },
      },
      line_items: [
        {
          price: "price_1K5MKEDnvaRMJ1pEHynuqtZm",
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

router.post("/create-spei-hosted-instructions", async (req, res) => {
  try {
    const intent = await mxStripe.paymentIntents.create({
      amount: 1099,
      currency: "mxn",
      customer: "cus_LA0jP0cx5LpVN5",
      payment_method_types: ["customer_balance"],
      payment_method_data: {
        type: "customer_balance",
      },
      payment_method_options: {
        customer_balance: {
          funding_type: "bank_transfer",
          bank_transfer: {
            type: "mx_bank_transfer",
          },
        },
      },
      confirm: true,
    });

    const { hosted_instructions_url } =
      intent.next_action.display_bank_transfer_instructions;

    res.json({ url: hosted_instructions_url });
  } catch (err) {
    console.log("Ohhhh nooo!");
    console.log(err);
  }
});

router.post("/create-oxxo-hosted-voucher", async (req, res) => {
  try {
    const intent = await mxStripe.paymentIntents.create({
      amount: 1099,
      currency: 'mxn',
      payment_method_types: ['oxxo'],
      payment_method_data: {
        type: "oxxo",
        billing_details: {
          name: 'OXXO Test',
          email: 'oxxo@test.com',
        }
      },
      confirm: true,
    });

    const { hosted_voucher_url } =
      intent.next_action.oxxo_display_details;

    res.json({ url: hosted_voucher_url });
  } catch (err) {
    console.log("Ohhhh nooo!");
    console.log(err);
  }
});

module.exports = router;
