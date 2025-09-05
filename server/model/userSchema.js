import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Minimum age must be 18"],
    max: [65, "Maximum age must be 65"],
  },
  village: {
    type: String,
    required: [true, "Village is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required"],
  },
  bloodGroup: {
    type: String,
    required: [true, "Blood Group is required"],
  },
});

const userCollection = mongoose.model("users", userSchema);
export default userCollection;
