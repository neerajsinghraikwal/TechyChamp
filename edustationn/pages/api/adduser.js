import connection  from "../../server/config/database"
import UserModel from "../../server/models/user";
export default async function adduser(req, res) {
  const {email}=req.body
  await connection()

  const user =await UserModel.findOne({email})
  if(user){
    res.status(400).json({"msg":"User already exist"})
  }
  else{
    try{
      const user=await UserModel.create(req.body)
      console.log("Added")
      res.status(200).json(user)
    }catch(err){
      console.log(err)
      res.status(400)
    }
  }
}