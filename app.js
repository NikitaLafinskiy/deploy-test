const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, message: "OK" });
});

app.listen(6969, () => {
  console.log("Listening on port 6969");
});
