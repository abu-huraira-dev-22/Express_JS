
import express from "express";
import morgan from "morgan";
const app = express();
app.use(express.json());
let users = [];
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

app.put('/users/:username',(req,res)=>{
  const {username} = req.params
  users = users.map((user)=>{
    if(user.username == username){
      user = req.body
      return user
    }
    return user
  })
  res.json({
     status:true,
    message: 'Update User Data Successfully',
  })
})

app.delete('/users/:username',(req,res)=>{
  const {username} = req.params
  users = users.filter((user)=>{
    return user.username != username
  })
    res.json({
    status: true,
    message: "Users Deleted Successfully",
  });
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