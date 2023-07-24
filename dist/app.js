"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./routers/userRouter"));
const Port = 4009;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("This is api start / api");
});
app.use(userRouter_1.default);
app.listen(Port, () => {
    console.log(`app is running port ${Port} `);
});
