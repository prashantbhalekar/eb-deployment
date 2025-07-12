const express = require("express");

const app = express(express.json());

app.get("", (req, res) => {
  res.send("Deployment With Docker!");
});

app.get("/json", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
