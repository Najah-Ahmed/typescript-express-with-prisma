import express, { Express, Request, Response } from "express";
import userRouter from "./routers/userRouter";
import bookRouter from "./routers/bookRouter";

const Port = 4009;
const app: Express = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is api start /api/user or /api/book");
});
app.use("/api/user", userRouter);
app.use("/api/book", bookRouter);

app.listen(Port, () => {
  console.log(`app is running port ${Port} `);
});
