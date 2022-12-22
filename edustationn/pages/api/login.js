// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import userModel from "../../models/user";
import connectToMongo from "../../utils/mongodb";


export default async function handler(req, res) {
    await connectToMongo();
    console.log("connected to Mongo")
    try{
      const data = await userModel.find({});
      res.status(200).json("data")
    }catch(err){
      res.status(401).json(err)
    }
}
