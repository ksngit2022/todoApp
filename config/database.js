import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`mongoose connected successfully : ${connection.host}`);
  } catch (error) {
    // throw new Error("connection failed !");
    console.log(error);
    process.exit(1);
  }
};
