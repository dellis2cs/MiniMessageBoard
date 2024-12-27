const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const messageRouter = require("./routes/messages");
app.use(messageRouter);
app.listen(3000);
