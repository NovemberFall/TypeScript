
![](img/2020-01-02-20-27-25.png)
![](img/2020-01-02-20-27-59.png)
---

## Type
- update index.ts
```ts
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response =>{
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
});
```
---

## More on Types
![](img/2020-01-02-20-38-01.png)
![](img/2020-01-02-20-39-02.png)
---

## Examples of Types
![](img/2020-01-02-20-47-50.png)
![](img/2020-01-02-20-49-06.png)
![](img/2020-01-02-20-49-32.png)
