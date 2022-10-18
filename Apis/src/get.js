const express = require("express");

const app = express();

app.listen("3000", () => console.log("Running ..."));

// middleware
app.use(express.json());

// ----------------------GET ----------------------------------
app.route("/").get((req, res) => res.send("Hello!!"));
app.route("/about").get((req, res) => res.send("About this page!!"));
