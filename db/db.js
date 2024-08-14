

import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/musicapp")
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log("error connecting to the db", error);
  });

export default mongoose;