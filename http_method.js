import express from 'express'
const app = express()

app.get('/users',(req,res)=>{
    res.json({
        status: true,
        data: [
            {name:"Huraira"},
            {name:"Abdul"}
        ]
    })
})

app.post('/users',(req,res)=>{
    res.json({
        status:true,
        message: "User Added Successfully"
    })
})

app.put('/users',(req,res)=>{
    res.json({
        status:true,
        message: "User Updated Successfully"
    })
})

app.patch('/users',(req,res)=>{
    res.json({
        status:true,
        message: "User Field updated Successfully"
    })
})

app.delete('/users',(req,res)=>{
    res.json({
        status:true,
        message: "User Deleted Successfully"
    })
})


app.listen(2000,()=>[
    console.log('Server is running')
])
