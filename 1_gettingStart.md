## Environment Setup
![](img/2020-01-02-20-03-37.png)
---

## First App
![](img/2020-01-02-20-06-21.png)
![](img/2020-01-02-20-06-49.png)
- `npm install axios`
- create index.ts

- go to `https://jsonplaceholder.typicode.com/`
![](img/2020-01-02-20-11-59.png)
- click `/todos`
- `https://jsonplaceholder.typicode.com/todos/1`
- index.ts
```ts
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response =>{
    console.log(response.data);
});
```
- now we try to compiler .ts to .js
![](img/2020-01-02-20-15-42.png)
- `node index.js`
![](img/2020-01-02-20-17-02.png)
---

- OR WE CAN USE 2ND WAY:
![](img/2020-01-02-20-18-21.png)
---

## one quick change
## Catching Errors with Typescript

