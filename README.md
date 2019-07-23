# TypeScript
---
```ts
# sudo npm -g install typescript

How to use

Run "npm install" to install the required dependencies

Run "tsc" to compile the TypeScript code

Run "npm start" to run the development server (lite-server)

```
- create a typeScript project
![](img/1.png)

- on terminal:  npm init
![](img/2.png)

```ts
npm install lite-server --save-dev
```
![](img/3.png)

- add "start" into "scripts"
![](img/4.png)

- enter: npm start

- adding a string into body
![](img/5.png)

- open a new terminal, enter:  
```ts
 tsc --init
```
![](img/6.png)

- since there is not a .js file
![](img/7.png)

- therefore, run 'tsc', it will complie a .ts file to .js file
- then, it will work
![](img/8.png)

### `前置工作`
- since I have installed npm in global
![](img/9.png)

- the typescript is the superset of javascript
![](img/10.png)

# if we want to change the .ts codes frequently
```
tsc --help

# -w, --watch   Watch input files.
# 监视 .ts 文件

tsc -w app.ts
```
![](img/11.png)




### Environment Setup

1. create a new package
`mkdir fetchJson`
`cd fetchJson`

2. npm install axios
-In a nutshell, Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API. 

3. in fetchJson folder, create a index.ts
- Make a network request to fecth some JSON and print the result
- go to jsonplaceholder
[jsonplaceholder](https://jsonplaceholder.typicode.com/)
- after click the website address
-  => Resources => /todos (click /todos)
-  https://jsonplaceholder.typicode.com/todos/1

```ts
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then((response) => {
    console.log(response.data);
})
```
### Remember we can't run typescript code directly inside the browser
- we have to compile the file into plain 
