import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updatedUser,
  deletedUser,
  // createManyUser,
} from "../Controllers/userControllers";

const router = express.Router();

// *** All User
router.get("/", getAllUsers);

// *** Single User
router.get("/:id", getUser);

// *** create User
router.post("/", createUser);

// *** update User
router.put("/:id", updatedUser);

// *** delete User
router.delete("/:id", deletedUser);

// *** create many users
// router.post("/createMany", createManyUser);
export default router;
