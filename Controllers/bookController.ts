import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany();
    res.json(books);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      //   msg: error.message,
    });
  }
  //   const books = await prisma.book.findMany();
  //   res.json(books);
  //   console.log(books);
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const book = await prisma.book.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({
      message: "something went wrong",
      //   msg: error.message,
    });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { bookTitle, authorID, year } = req.body;
    const book = await prisma.book.create({
      data: {
        bookTitle: bookTitle,
        year: year,
        author: {
          connect: {
            id: authorID,
          },
          //   username: true,
        },
      },
    });
    res.json(book);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      //   msg: error.message,
    });
  }
};

export const updatedBook = async (req: Request, res: Response) => {
  try {
    const { bookTitle, authorID, year } = req.body;
    const updateBook = await prisma.book.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        bookTitle: bookTitle,
        year: year,
        author: {
          connect: {
            id: authorID,
          },
          // username: true,
        },
      },
    });
    res.json(updateBook);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      //   msg: error.message,
    });
  }
};

export const deletedBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteBook = await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(deleteBook);
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
