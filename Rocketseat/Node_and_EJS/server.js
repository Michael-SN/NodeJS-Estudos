const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "Desenvolvedor",
    },
    {
      title: "E",
      message: "EJS usa Javascript para renderizar HTML",
    },
    {
      title: "M",
      message: "Muito maneiro usar o EJS",
    },
    {
      title: "A",
      message: "Avançando sempre!",
    },
    {
      title: "I",
      message: "Inspiração para todos",
    },
    {
      title: "S",
      message: "Sucesso garantido",
    },
  ];
  res.render("pages/index", {
    qualitys: items,
  });
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(8080, console.log("running ..."));
