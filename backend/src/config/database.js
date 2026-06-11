import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`,
    );
    console.log(`MongoDB is Connected!!!
         ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("connectDB Error", error);
    process.exit(1);
  }
};

export default connectDB;
