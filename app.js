import { setup, allToDos, saveToDo } from "./utils/filestorage";
import express from "express";

const PORT = 9995;
const app = express();

setup();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//! GET -Route to read all todos

app.get("/api/todos.json", (req, res) => {
  allToDos().then((todos) => res.json(todos));
});

//!POST -Route to add one todo

app.put("/api/todos.json", (req, res) => {
  const todo = req.body;
  console.log(todo);
  res.send();
});

//#LISTEN

app.listen(PORT, () => {
  console.log("Port is:http://localhost:" + PORT);
});
