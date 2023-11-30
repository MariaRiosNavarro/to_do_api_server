import { setup, allToDos, saveToDo } from "./utils/filestorage.js";
import express from "express";
import cors from "cors";

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

app.get("/api/todos", (req, res) => {
  allToDos().then((todos) => res.json(todos));
});

//!POST -Route to add one todo

app.post("/api/todos", (req, res) => {
  const todo = req.body;
  console.log(todo);
  res.send();
});

//#LISTEN

app.listen(PORT, () => {
  console.log("Port is:http://localhost:" + PORT);
});
