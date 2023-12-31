Express App:

- for default package.json: npm init -y

- add "type":"module" in package.json

- for express: npm i express

- npm i

- create .gitignore and write this inside:

```
node_modules/

.vscode/

```

- create your app file, for example app.js

- create one folder utils and inside create filestorage.js file

- to run the server (if the name of your app file is app.js) can you use one of them:

```javascript

node app.js

```

or

```javascript

node --watch app.js


```

- if you need handle [cors](https://www.npmjs.com/package/cors): npm i cors

- DONT FORGET! imports of files need the **file end**, for example:

```javascript
import { setup } from "./utils/filestorage.js";
```

- DONT FORGET! : **imports are not automatic** like React, you must add it manually. For example:

```javascript
import express from "express";
import cors from "cors";
```

### to handle id use

```javascript

npm i uuid

```

- for example:

```javascript
import { v4 } from "uuid";

export const saveToDo = (
  todo = {
    todo: "do something",
    priority: "normal",
    category: "personal",
  }
) => {
  todo.id = v4();
  fs.writeFile("./todos/" + todo.id, JSON.stringify(todo));
};
```

### to protect your keys use dotenv

```javascript
npm install dotenv

```

- And create a .env file in your root with :

```javascript

PORT=yourPort
CORS_ORIGIN=http://localhost:yourPort
DATABASE_PASSWORD=yourPassword

```

- You can use this variables in your App for example like (dont forget import & config!!):

```javascript
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
```

- DONT FORGET to add in .gitignore:

```
.env

```

### for repository :

```javascript

git init

git status

git add .

git commit -m "first commit"

```
