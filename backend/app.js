import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();
app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://mokshmahajan2004:6UVkL7gADhiXHFQS@cluster0.kfkd4st.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to Database and Listening to Localhost 5000")
  )
  .catch((err) => console.log(err));
