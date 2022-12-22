const mongoose=require("mongoose")
require("dotenv").config()
const connection=async()=>mongoose.connect(process.env.MONGO_URL)
export default connection