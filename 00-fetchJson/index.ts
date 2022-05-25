import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: Number;
  s;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo: Todo = response.data;

  const Id = todo.id;
  const completed = todo.completed;
  const title = todo.title;

  console.log(`
      The Todo with id : ${Id}
      Has a title : ${title}
      Is it finished ? ${completed}
  `);
});

//! To Complile :
// 1. tsc index.ts .
//! To Run :
// 2 .node index.js.

//! Complile and Run :
// ts-node index.ts .
