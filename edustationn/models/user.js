import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const userModel = mongoose.models.user || mongoose.model("users", userSchema);

module.exports = {userModel};