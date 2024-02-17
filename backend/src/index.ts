import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const cors = require("cors")

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());


app.post("/todos", async function(req: Request, res: Response){
        const newTodo = await prisma.todo.create({
            data: req.body,
        });
        res.send(newTodo);
    }
);

app.get("/todo", async function(_req: Request, res: Response){
    const todos = await prisma.todo.findMany();
    res.send(todos);
});
app.put("/todos/:id", async function(req: Request, res: Response) {
        const { id } = req.params;
        const todo = await prisma.todo.update({
            where: { id: parseInt(id) },
            data: req.body,
        });

        res.send(todo);
    }
);

app.delete(" /todo/:id", async function(req: Request, res: Response) {
    const { id } = req.params;
    const result = await prisma.todo.delete({
        where: { id: parseInt(id) }
    })
    console.log(result);
    res.send(result);
})

// ... other routes

app.use((err: Error, _req: Request, res: Response, next: Function) => {
    console.log(err);
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});