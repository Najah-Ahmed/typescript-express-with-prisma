"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../Controllers/userControllers");
const router = express_1.default.Router();
// *** All User
router.get("/api", userControllers_1.getAllUsers);
// *** Single User
router.get("/api/:id", userControllers_1.getUser);
// *** create User
router.post("/api", userControllers_1.createUser);
// *** update User
router.put("/api/:id", userControllers_1.updatedUser);
// *** delete User
router.delete("/api/:id", userControllers_1.deletedUser);
// *** create many users
router.post("/api/createMany", userControllers_1.createManyUser);
exports.default = router;
