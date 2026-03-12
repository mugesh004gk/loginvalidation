const userModel=require("../model/userModel")
const userController=new Object()


userController.usercreate=async(req,res)=>{
    try{
        let body = req.body
        let result = await userModel.create(body)
        if(result){
            return{status:true,statuscode:201,message:"user created" ,data:result}
        }
           return{ststus:false,statuscode:400,message:"user not created"}

    }
    catch(err){
        console.log(err)
    }
}

userController.userread=async(req,res)=>{
    try{
        let result= await userModel.find()
        if(result){
            return{status:true,statuscode:200,message:"user founded ",data:result}
        }
           return{status:false,statuscode:400,message:"user not founded"}
    }
    catch(err){
        console.log(err)
    }
}
userController.userid=async(req,res)=>{
    try{
        let userid=req.params.id
        let result=await userModel.findById(userid)
        if(result){
            return {status:true,statuscode:200,message:"user id founded",data:result}
        }
            return{status:false,statuscode:400,message:"user id not founded"}
    }
    catch(err){
        console.log(rr)
    }
}

userController.userupdate=async(req,res)=>{
    try{
        let userid=req.params.id
        let payload=req.body
        let result=await userModel.findByIdAndUpdate(userid,payload,{new:true})
        if(result){
            return{status:true,statuscode:200,message:"updated successfully",data:result}
        }
        return{status:false,statuscode:400,message:"not updated ",data:result}
    }
    catch(err){
        console.log(err)
    }
}

userController.userdelete=async(req,res)=>{
    try{
        let userid=req.params.id
        let result=await userModel.findByIdAndDelete(userid)
        if(result){
            return{status:true,statuscode:200,message:"user id deleted",data:result}
        }
        return{status:false,statuscode:400,message:"user id not deleted"}
    }
    catch(err){
        console.log(err)
    }
}
userController.login=async(req,res)=>{
    try{
        let body = req.body
        let user=await userModel.findOne({email:body.email})
        console.log(user)
        if(!user){
            return{status:false,statuscode:400,message:"Invaild email"}
        }

        if(user.password!==body.password){
            return{status:false,statuscode:400,message:"password do not match"}
        }
        return{status:true,statuscode:200,message:"Login successfully",data:user}
    }
    catch(err){
        console.log(err)
    }
}

module.exports=userController