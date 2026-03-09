const express=require("express")
const app= express()
app.use(express.json())
const mongoose=require("mongoose")
const port = 4000
const URL="mongodb+srv://gkmugesh2004_db_user:qW88MXliYhfm5qv4@cluster0.evjdyui.mongodb.net/?appName=Cluster0/login"
const userRouter=require("./router/userRouter")
mongoose.connect(URL).then(()=>{
    console.log("db is connected")
})
.catch((err)=>{
    console.log(err)
})

app.use("/user",userRouter)

app.listen(port,()=>{
    console.log(`port server at ${port}`)
})