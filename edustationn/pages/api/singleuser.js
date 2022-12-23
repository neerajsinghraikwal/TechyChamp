import connection from "../../server/config/database";
import UserModel from "../../server/models/user";

export default async function singleuser(req,res){
    const id=req.query._id;

    res.send(id)
}