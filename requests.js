
import express from "express";
const app = express();
app.use(express.json());
const users = [];
app.get("/users", (req, res) => {
  res.json({
    status: true,
    message: "All Users Data",
    data: users,
  });
});

app.get('/users/:username',(req,res)=>{

  const {username} = req.params
  res.json({
    status:true,
    message: 'Single User Data',
    data: users.filter((user)=>user.username==username)
  })
})
app.post("/users", (req, res) => {
  const data = req.body;
  users.push(data);
  res.json({
    status: true,
    message: "Users Added Successfully",
  });
});
app.listen(5000, () => {
  console.log("Server is running");
});