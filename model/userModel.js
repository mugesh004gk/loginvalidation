const mongoose=require("mongoose")
const {Schema}=require("mongoose")
const userSchema=new Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    age:{type:String,default:null},
    password:{type:String,default:null},
    gender:{type:String,default:null}
})

module.exports=mongoose.model("logininfo",userSchema)