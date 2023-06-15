const express = require("express");
const morgan = require("morgan");
const payment = require("./routes/payment");
const { PORT } = require("./routes/config");
const path = require("path");

const app = express();

app.use(morgan("dev"));

app.use(payment);
app.use(express.static(path.resolve("src/public")));

app.listen(PORT);
console.log("servidor en el puerto", PORT);
