const express = require("express");
const axios = require("axios");

const app = express();

app.listen("3000", () => console.log("Running ..."));

// middleware
app.use(express.json());

app.route("/").get((req, res) => {
  axios
    .get("https://api.github.com/users/michael-sn")
    .then((result) =>
      res.send(
        `<img style="width: 150px; height: 150px" src="${result.data.avatar_url}"/>`
      )
    )
    .catch((error) => console.log(error));
});
