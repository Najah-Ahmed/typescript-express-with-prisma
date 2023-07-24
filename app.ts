import express, { Express, Request, Response } from "express";
import userRouter from "./routers/userRouter";

const Port = 4009;
const app: Express = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is api start / api");
});
app.use(userRouter);

app.listen(Port, () => {
  console.log(`app is running port ${Port} `);
});
