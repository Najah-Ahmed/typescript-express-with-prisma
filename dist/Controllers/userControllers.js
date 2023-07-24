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
exports.deletedUser = exports.updatedUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany({
            include: {
                books: true,
            },
        });
        res.json(users);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong",
            //   msg: error.message,
        });
    }
});
exports.getAllUsers = getAllUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.findUnique({
            where: {
                id: Number(req.params.id),
            },
            // include all books
            include: {
                books: true,
            },
        });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({
            message: "something went wrong",
            //   msg: error.message,
        });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        const user = yield prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password,
            },
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong",
            //   msg: error.message,
        });
    }
});
exports.createUser = createUser;
const updatedUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const updateUser = yield prisma.user.update({
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
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong",
            //   msg: error.message,
        });
    }
});
exports.updatedUser = updatedUser;
const deletedUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleteUser = yield prisma.user.delete({
            where: {
                id: Number(id),
            },
        });
        res.json(deleteUser).statusCode;
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong",
        });
    }
});
exports.deletedUser = deletedUser;
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
