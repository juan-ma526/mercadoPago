require("dotenv").config();

const PORT = 3000;
const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_TOKEN;

module.exports = { PORT, MERCADOPAGO_API_KEY };
