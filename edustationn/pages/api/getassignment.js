import AssignmentModel from "../../server/models/assignment"
import connection from "../../server/config/database"

export default async function getassignment(req,res){
    await connection()
    try{
        const assign= await AssignmentModel.find()
        console.log(assign)
        res.status(200).json(assign)
    }catch(err){
        res.status(400)
    }
}

