const express = require("express");

const app = express();

app.listen("3000", () => console.log("Running ..."));

// middleware
app.use(express.json());

app.route("/").get((req, res) => res.send("Hello"));

app.route("/:param").get((req, res) => res.send(req.params.param));

app.route("/about/:us").get((req, res) => res.send(req.params.us));
