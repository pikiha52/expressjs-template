import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/index.js";
const port = process.env.PORT || 3002;

const app = express();
// mongoose.connect("mongodb://mongo:8089/service-product", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", (error) => console.log(error));
// db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use("/api", route);

app.listen(port, () => console.log(`Server up and running ${port} `));
