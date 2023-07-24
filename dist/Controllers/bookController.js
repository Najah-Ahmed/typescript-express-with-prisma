"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedBook = exports.updatedBook = exports.createBook = exports.getBook = exports.getAllBooks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield prisma.book.findMany();
        res.json(books);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong",
            //   msg: error.message,
        });
    }
    //   const books = await prisma.book.findMany();
    //   res.json(books);
    //   console.log(books);
});
exports.getAllBooks = getAllBooks;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield prisma.book.findUnique({
            where: {
                id: Number(req.params.id),
            },
        });
        res.status(200).json(book);
    }
    catch (error) {
        res.status(404).json({
            message: "something went wrong",
            //   msg: error.message,
        });
    }
});
exports.getBook = getBook;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookTitle, authorID, year } = req.body;
        const book = yield prisma.book.create({
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
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong",
            //   msg: error.message,
        });
    }
});
exports.createBook = createBook;
const updatedBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookTitle, authorID, year } = req.body;
        const updateBook = yield prisma.book.update({
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
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong",
            //   msg: error.message,
        });
    }
});
exports.updatedBook = updatedBook;
const deletedBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleteBook = yield prisma.book.delete({
            where: {
                id: Number(id),
            },
        });
        res.json(deleteBook);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong",
        });
    }
});
exports.deletedBook = deletedBook;
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
