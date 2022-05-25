import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo: Todo = response.data as Todo;
  logTodo(todo.id, todo.title, todo.completed);
});

const logTodo = (id: Number, title: string, completed: boolean) => {
  console.log(`
    The Todo with id : ${id}
    Has a title : ${title}
    Is it finished ? ${completed}
`);
};

//! To Complile :
// 1. tsc index.ts .
//! To Run :
// 2 .node index.js.

//! Complile and Run :
// ts-node index.ts .
