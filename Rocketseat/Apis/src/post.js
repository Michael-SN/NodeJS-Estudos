const express = require("express");

const app = express();

app.listen("3000", () => console.log("Running ..."));

// middleware
app.use(express.json());

// ---------------------- POST ----------------------------------
app.route("/").post((req, res) => res.send(req.body));
