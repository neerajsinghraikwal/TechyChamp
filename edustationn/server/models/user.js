import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    userName:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String,enum:["student"],default:"student"}
})

const UserModel=mongoose.models.hackathon_user|| mongoose.model("hackathon_user",userSchema)

export default UserModel