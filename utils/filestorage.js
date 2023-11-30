import fs from "fs/promises";

//#json herstellen

export const setup = () => {
  fs.access("./todos.json")
    .then((data) => console.log(data))
    .catch((err) => fs.writeFile("./planes.json", "[]"));
};

//# alle Todos anzeigen

export const allToDos = () => {
  return fs
    .readFile("./todos.json", { encoding: "utf8" })
    .then((data) => JSON.parse(data));
};

//# 1 Todo speichern

export const saveToDo = (todo) => {
  allToDos()
    .then((data) => {
      data.push(todo);
      console.log(data);
      return data;
    })
    .then((array) => fs.writeFile("./todos.json", JSON.stringify(array)));
};
