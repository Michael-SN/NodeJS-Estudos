const express = require("express");

const app = express();

app.listen("3000", () => console.log("Running ..."));

// middleware
app.use(express.json());

// app.route("/").get((req, res) => res.send("<h1>Whassup!</h1>"));

// app.route("/").post((req, res) => {
//   const { nome, cidade, hobbies } = req.body;
//   res.send(`Meu nome é ${nome}, moro no/em  ${cidade} e gosto de ${hobbies}`);
// });
