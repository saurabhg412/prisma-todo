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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors = require("cors");
const app = (0, express_1.default)();
const port = 3000;
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use(cors());
app.post("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTodo = yield prisma.todo.create({
        data: req.body,
    });
    res.send(newTodo);
}));
app.get("/todo", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield prisma.todo.findMany();
    res.send(todos);
}));
app.put("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todo = yield prisma.todo.update({
        where: { id: parseInt(id) },
        data: req.body,
    });
    res.send(todo);
}));
app.delete(" /todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield prisma.todo.delete({
        where: { id: parseInt(id) }
    });
    console.log(result);
    res.send(result);
}));
// ... other routes
app.use((err, _req, res, next) => {
    console.log(err);
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
