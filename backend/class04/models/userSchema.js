import mongoose from "mongoose";

const schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("user", schema);

export default userModel;
