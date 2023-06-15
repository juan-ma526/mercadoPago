const { createOrder, recieveWebHook } = require("../controllers/payment");
const router = require("express").Router();

router.post("/create-order", createOrder);

router.get("/success", (req, res) => {
  res.send("success");
});
router.get("/failure", (req, res) => {
  res.send("failure");
});
router.get("/pending", (req, res) => {
  res.send("pending");
});

router.post("/webhook", recieveWebHook);

module.exports = router;
