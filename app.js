import { setup, getAllToDos, saveToDo } from "./utils/filestorage.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 9995;
const app = express();

setup();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

//! GET -Route to read all todos

app.get("/api/todos", (req, res) => {
  getAllToDos()
    .then((todos) => res.json(todos))
    .catch(() => res.status(500).end());
});

//!POST -Route to add one todo

app.post("/api/todos", (req, res) => {
  const todo = req.body;
  console.log(todo);
  saveToDo(todo);
  res.send();
});

//#LISTEN

app.listen(PORT, () => {
  console.log("Port is:http://localhost:" + PORT);
});
