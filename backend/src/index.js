import dotenv from "dotenv";
import path from "node:path";
import connectDB from "./config/database.js";
import app from "./app.js";

const __dirname = import.meta.dirname;

console.log(path.join(__dirname, "..", "..", ".env"));

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"),
});

// console.log(process.env.MONGODB_URI);

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("Error", error);
      //   throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`MongoDB Connection Failes ${error}`);
  }
};

startServer();
