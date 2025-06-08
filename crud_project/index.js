import express from 'express';

import Todo from "./src/models/todo_model.js";

const app = express();

var todos =[
    new Todo(1, "todo1", "todo1 description"),
    new Todo(2, "todo2", "todo2 description"),
];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/todos", (req, res) => {
    res.json(todos);
});


app.get("/todos/:id", (req, res)=>{
    var id = parseInt(req.params.id);
    console.log("id", id);
    var todo = findTodoByID(id);
    exitIfTodoNotFound(todo, id, res);
    res.json(todo);
});


app.put("/todos/:id", (req, res) => {
    var id = parseInt(req.params.id);
    var todo = findTodoByID(id);
    exitIfTodoNotFound(todo, id, res);
    var {description, title} = req.body;
    exitIfTitleOrDescIsUndefined(title, description, res);
    todo.title = title;
    todo.description = description;
    res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
    var id = parseInt(req.params.id);
    var todo = findTodoByID(id);
    exitIfTodoNotFound(todo, id, res);
    var index = todos.indexOf(todo);
    todos.splice(index, 1);
    res.json({
        "message": "todo deleted",
    });
});

function exitIfTitleOrDescIsUndefined(title, description, res){
    if(title === undefined || description === undefined){
        res.status(400).json({
            "message": "title and description are required",
        })
        return;
    }
}

function exitIfTodoNotFound(todo, id, res){
    if(todo === undefined){
        res.status(404).json({
            "message": "todo not found by id " + id,
        })
        return;
    }
}

function findTodoByID(id){
    return todos.find((todo) =>todo.id === id);
}

app.post("/todos", (req, res) => {
    var {description, title} = req.body;
    console.log("title", title);
    console.log("desc", description);

    exitIfTitleOrDescIsUndefined(title, description, res);
    var id = todos.length + 1;
    var todo = new Todo(id, title, description);
    todos.push(todo);
    res.status(201).json({
        status: "success",
        data: todo,
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});