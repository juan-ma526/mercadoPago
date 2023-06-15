const mercadopago = require("mercadopago");
const { MERCADOPAGO_API_KEY } = require("../routes/config");

const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: MERCADOPAGO_API_KEY,
  });
  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "PS5",
        unit_price: 20000,
        currency_id: "ARS",
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending",
    },
    notification_url:
      "https://1ad9-2803-cf00-af6-3200-a0b2-7489-aa05-7dd6.sa.ngrok.io/webhook",
  });
  console.log(result, "result");
  res.send(result.body);
};

const recieveWebHook = async (req, res) => {
  const payment = req.query;
  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data, "data");
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message });
  }

  res.sendStatus(204);
};

module.exports = { createOrder, recieveWebHook };
