const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("../public/views/index", { messages });
});

router.get("/new", (req, res) => {
  res.render("../public/views/form");
});

router.post("/new", (req, res) => {
  const isValid = true;
  if (isValid) {
    messages.push({
      user: req.body.user,
      text: req.body.text,
      added: new Date(),
    });
    console.log("added");
    res.redirect("/");
  } else
    res.render("../public/views/index", {
      user: req.body.user,
      text: req.body.text,
      added: new Date(),
    });
});

module.exports = router;
