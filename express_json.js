import express from "express";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body); // debug

  const { name, profession, subjects } = req.body;

  res.json({
    status: true,
    message: "Received Your Data Successfully",
  });
});

app.listen(5000, () => {
  console.log("Server is running...");
});