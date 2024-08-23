const mongoose=require("mongoose")
const schema=new mongoose.Schema({link:String,uploaded_by:String})
const post=mongoose.model("post",schema)
module.exports=post