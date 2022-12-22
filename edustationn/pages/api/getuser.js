import connection  from "../../server/config/database"
import UserModel from "../../server/models/user";
export default async function getuser(req, res) {
  await connection()
  try{
    const user=await UserModel.find()
    res.status(200).json(user)
  }catch(err){
    console.log(err)
    res.status(400)
  }
}