import fs from "fs/promises";
import fsystem from "fs";
import { v4 } from "uuid";

//#make json

//- OLD VERSION without FOLDER
// export const setup = () => {
//   fs.access("./todos.json")
//     .then((data) => console.log(data))
//     .catch((err) => fs.writeFile("./todos.json", "[]"));
// };

//- NEW VERSION with STORAGE FOLDER

export const setup = () => {
  fs.access("./storage/")
    .then(() => console.log("Folder exist"))
    .catch(() => fs.mkdir("./storage"));
};

//# 1 Todo speichern

// export const saveToDo = (todo) => {
//   allToDos()
//     .then((data) => {
//       data.push(todo);
//       console.log(data);
//       return data;
//     })
//     .then((array) => fs.writeFile("./todos.json", JSON.stringify(array)));
// };

export const saveToDo = (
  todo = {
    todo: "something",
    priority: "normal",
    category: "personal",
  }
) => {
  todo.id = v4();
  fs.writeFile("./storage/" + todo.id, JSON.stringify(todo));
};

//# alle Todos anzeigen

// - OLD VERSION

// export const allToDos = () => {
//   return fs
//     .readFile("./todos.json", { encoding: "utf8" })
//     .then((data) => JSON.parse(data));
// };

export const getAllToDos = () => {
  return fs.readdir("./storage").then((files) => {
    const arr = [];
    for (const file of files) {
      //we make a json object and push into our array
      //compakt same way: arr.push(JSON.parse(fsystem.readFileSync("./" + db + "/" + file)));
      const data = fsystem.readFileSync("./storage/" + file);
      const char = JSON.parse(data);
      arr.push(char);
    }
    // console.log("our new JSON Array:", arr);
    return arr;
  });
};

//# delete appended to the ID,

// wir löschen eine datei anhand der id die ja auch gleichzeitig der dateiname ist
export const deleteToDo = (id) => {
  return fs.rm("./storage/" + id);
};

// # 1 Output todo with certain criteria (done, category & priority)
