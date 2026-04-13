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

app.listen(2000,()=>[
    console.log('Server is running')
])