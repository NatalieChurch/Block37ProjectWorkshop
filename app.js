import express from "express";
const app = express();
import router from "./api/birds.js";
import authRouter from "./auth.js"



app.use(express.json());

app.use("/", router);

app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});


export default app;
