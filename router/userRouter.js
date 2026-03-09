const express=require("express")
const userController=require("../controller/userController")
const userRouter=express.Router()

userRouter.post("/usercreate",async(req,res)=>{
    try{
        let result =await userController.usercreate(req)
        if(result){
            return res.send(result)
        }
    }
    catch(err){
        console.log(err)
    }
})
userRouter.get("/userget",async(req,res)=>{
    try{
        let result=await userController.userread(req)
        if(result){
            return res.send(result)
        }
    }
    catch(err){
        console.log(err)
    }
})

userRouter.post("/loginapi",async(req,res)=>{
    try{
        let result=await userController.login(req)
        if(result){
            return res.send(result)
        }
    }
    catch(err){
        console.log(err)
    }
})
module.exports=userRouter