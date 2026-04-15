
// const express = require("express");
import express from 'express'
// const { title } = require("node:process");
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


// app.post('/',(req,res)=>{
//   res.json({
//     status:true,
//     data:[{
//       message:'User Signed up Successfully'
//     }]
//   })
// })
app.listen(5000, (req, res) => {
  console.log("Server is running");
});

