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

- if you need handle ![cors](https://www.npmjs.com/package/cors): npm i cors

- dont forget! imports of files need the file end, for example:

```javascript
import { setup } from "./utils/filestorage.js";
```

- dont forget! imports are not automatic like React, you must add it manually. For example:

```javascript
import express from "express";
import cors from "cors";
```

- for repository :

```javascript

git init

git status

git add .

git commit -m "first commit"

```
