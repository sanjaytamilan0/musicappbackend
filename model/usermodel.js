
import mongoose from "../db/db.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number,
    required: true
  }, 
  }, {
  versionKey: false
})

const userModel = mongoose.model("users", userSchema);

export default userModel;

