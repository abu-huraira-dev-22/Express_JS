const express = require("express");
const { title } = require("node:process");
const app = express();

// app.get('/', (req,res)=>{
//     res.send('<h1> Home Page</h1>')
// })
// app.get('/about', (req,res)=>{
//     res.send('<h1> About Page</h1>')
// })
// app.get('/contact', (req,res)=>{
//     res.send('<h1> Contact Page </h1>')
// })
// app.listen(5000)

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

app.listen(5000, (req, res) => {
  console.log("Server is running");
});
