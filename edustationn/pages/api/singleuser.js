import connection from "../../server/config/database";
import UserModel from "../../server/models/user";

export default async function singleuser(req,res){
    await connection();
    const id = req.query._id;
    try {
      const user = await UserModel.find({ _id: id });
      res.status(200).json(user);
    } catch (err) {
      res.status(400);
    }
}