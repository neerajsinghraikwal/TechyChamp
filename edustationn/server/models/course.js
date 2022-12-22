import mongoose from "mongoose"

const courseSchema=mongoose.Schema({
    title:{type:String},
    body:{type:String},
    role:{type:String,enum:["admin"],default:"admin"}
})

const CourseModel=mongoose.models.hackathon_course|| mongoose.model("hackathon_course",courseSchema)

export default CourseModel