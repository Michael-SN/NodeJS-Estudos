const express = require("express");

const app = express();

app.listen("3000", () => console.log("Running ..."));

// middleware
app.use(express.json());

// ---------------------- DELETE ----------------------------------
app.route("/:identifier").delete((req, res) => {
  res.send(req.params.identifier);
});
