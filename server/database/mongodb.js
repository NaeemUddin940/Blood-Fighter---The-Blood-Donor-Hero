import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`✅ Successfully Database Connected`);
  } catch (error) {
    console.error(`❌ Database Connection have some issue: error`);
  }
};

export default connectDB;