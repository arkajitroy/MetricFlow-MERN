import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    const MONGO_URL = "mongodb://127.0.0.1:27017/METRICFLOW_MERN";

    // Connect to MongoDB
    const connection = await mongoose
      .connect(MONGO_URL)
      .then(() => console.log("Connected to MongoDB"));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
