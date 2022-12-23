import connection from "../../server/config/database";
import UserModel from "../../server/models/user";
export default async function handler(req, res) {
  const {email,password}=req.body;
  await connection()
  let user =await UserModel.findOne({email,password})
  if(user){
    try{
        if(user.role==="admin"){
          res.redirect(307,"/admin")
          
        }
        else if(user.role==="student"){
          res.status(200).json("Login  Success")
        }
    }
    catch(err){
      console.log(" err is ")
      console.log(err)
      res.status(400).json("Login Failed")
    }
  }
  else{
    res.status(400).json({"err":"Login Failed"})
  }


}


