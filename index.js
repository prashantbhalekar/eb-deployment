const express = require("express");

const app = express(express.json());

app.get("", (req, res) => {
  res.send("Deployment With Docker and github action!");
});

app.get("/json", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/msg", (req, res) => {
  res.json({
    success: true,
    msg: "Hello There!",
  });
});

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
