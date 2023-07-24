import express from "express";
import {
  getAllBooks,
  getBook,
  createBook,
  updatedBook,
  deletedBook,
  // createManyUser,
} from "../Controllers/bookController";

const router = express.Router();

// *** All User
router.get("/", getAllBooks);

// *** Single Book
router.get("/:id", getBook);

// *** create Book
router.post("", createBook);

// *** update Book
router.put("/:id", updatedBook);

// *** delete Book
router.delete("/:id", deletedBook);

// *** create many users
// router.post("/api/createMany", createManyUser);
export default router;
