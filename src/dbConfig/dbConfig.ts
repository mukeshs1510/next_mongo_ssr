import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("connected built with mongodb");
    });

    connection.on("error", () => {
      console.log("connected built with mongodb");
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
