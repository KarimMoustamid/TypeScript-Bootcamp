import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  console.log(response.data);
});

//! To Complile :
// 1. tsc index.ts .
//! To Run :
// 2 .node index.js.

//! Complile and Run :
// ts-node index.ts .
