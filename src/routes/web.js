const express = require("express");
const { getHomePage } = require("../controllers/homeController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/home", getHomePage);

router.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

module.exports = router;
