import CourseModel from "../../server/models/course"
import connection from "../../server/config/database"

export default async function addcourse(req,res){
    await connection()
    try{
        const course= await CourseModel.create(req.body)
        console.log(course)
        res.status(200).json(course)
    }catch(err){
        res.status(400)
    }
}