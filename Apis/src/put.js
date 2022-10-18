const express = require("express");

const app = express();

app.listen("3000", () => console.log("Running ..."));

// middleware
app.use(express.json());

// ---------------------- PUT ----------------------------------
let author = "Teste";

app.route("/").get((req, res) => res.send(author));

app.route("/").put((req, res) => {
  author = req.body.author;
  res.send(author);
});
