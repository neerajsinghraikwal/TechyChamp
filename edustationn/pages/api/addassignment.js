import AssignmentModel from "../../server/models/assignment"
import connection from "../../server/config/database"

export default async function addassignment(req,res){
    await connection()
    try{
        const assign= await AssignmentModel.create(req.body)

        res.status(200).json(assign)
    }catch(err){
        res.status(400)
    }
}

