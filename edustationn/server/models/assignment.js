import mongoose from "mongoose"

const assignmentSchema=mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    valid:{type:String},
    role:{type:String,enum:["admin"],default:"admin"}
})

const AssignmentModel=mongoose.models.hackathon_assignment|| mongoose.model("hackathon_assignment",assignmentSchema)

export default AssignmentModel