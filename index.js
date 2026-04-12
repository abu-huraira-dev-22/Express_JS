const express = require("express");
// const { title } = require("node:process");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my website");
});

app.get("/jobs", (req, res) => {
  res.json({
    status: true,
    data: [
      {
        title: "Web Developer",
        salary: 120000,
      },
      {
        title: "App Developer",
        salary: 150000,
      },
    ],
  });
});

app.listen(500, (req, res) => {
  console.log("Server is running");
});
