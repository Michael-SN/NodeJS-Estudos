const express = require("express");

const app = express();

app.listen("3000", () => console.log("Running ..."));

// middleware
app.use(express.json());

app.route("/").get((req, res) => res.send(req.query));

app.route("/about/user").get((req, res) => res.send(req.query));
