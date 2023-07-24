import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      //   msg: error.message,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: "something went wrong",
      //   msg: error.message,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      //   msg: error.message,
    });
  }
};

export const updatedUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const updateUser = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    res.json(updateUser);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      //   msg: error.message,
    });
  }
};

export const deletedUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteUser = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(deleteUser).statusCode;
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

// ?! Ahh I see. just found this. createMany is not supported for SQLite.
// export const createManyUser = async (req: Request, res: Response) => {
//   try {
//     const { userList } = req.body;
//     const users = await prisma.user.createMany({
//       data: userList,
//     });
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({
//       message: "something went wrong",
//       //   msg: error.message,
//     });
//   }
// };
