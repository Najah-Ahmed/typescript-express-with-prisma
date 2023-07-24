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
router.get("/api", getAllUsers);

// *** Single User
router.get("/api/:id", getUser);

// *** create User
router.post("/api", createUser);

// *** update User
router.put("/api/:id", updatedUser);

// *** delete User
router.delete("/api/:id", deletedUser);

// *** create many users
// router.post("/api/createMany", createManyUser);
export default router;
