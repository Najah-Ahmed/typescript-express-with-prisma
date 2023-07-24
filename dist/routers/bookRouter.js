"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../Controllers/bookController");
const router = express_1.default.Router();
// *** All User
router.get("/", bookController_1.getAllBooks);
// *** Single Book
router.get("/:id", bookController_1.getBook);
// *** create Book
router.post("", bookController_1.createBook);
// *** update Book
router.put("/:id", bookController_1.updatedBook);
// *** delete Book
router.delete("/:id", bookController_1.deletedBook);
// *** create many users
// router.post("/api/createMany", createManyUser);
exports.default = router;
