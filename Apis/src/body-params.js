const express = require("express");

const app = express();

app.listen("3000", () => console.log("Running ..."));

// middleware
app.use(express.json());

app.route("/").post((req, res) => {
  const { nome, cidade, hobbies } = req.body;
  res.send(`Meu nome é ${nome}, moro no/em  ${cidade} e gosto de ${hobbies}`);
});

/*
  ?? POST - PUT - PATCH
  *-> Methods que podemos receber o req.body e manipulá-lo

*/
