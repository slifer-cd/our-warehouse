const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ worked: true });
});
router.patch("/", (req, res, next) => {
  res.status(200).json({ updated: true });
});
router.put("/", (req, res, next) => {
  res.status(200).json({ updated: true });
});

module.exports = router;
