'use strict';


const Express = require('express');

// import our CRUD actions
const {
  insertTodo,
  readTodos,
 // updateTodo,
  deleteTodo,
 // readTodo, 
  deleteTodos,
  markAsCompleted
} = require('./actions');

const Todo = require('./todo');

const FILENAME  = 'todos.json';
const PORT      = 3000;
const TODO_SLUG = 'todos';

const todo = new Todo(FILENAME);

const app = new Express();

// Use built-in JSON middleware to automatically parse JSON
app.use(Express.json());

app.post(`/${TODO_SLUG}`,       insertTodo.bind(null, todo));
app.get(`/${TODO_SLUG}`,        readTodos.bind(null, todo));
//app.put(`/${TODO_SLUG}/:id`,    updateTodo.bind(null, todo));
app.delete(`/${TODO_SLUG}/:id`, deleteTodo.bind(null, todo));
//app.get(`/${TODO_SLUG}/:id`,    readTodo.bind(null, todo));
app.post(`/${TODO_SLUG}/:id/completed`,    markAsCompleted.bind(null, todo));
app.delete(`/${TODO_SLUG}`, deleteTodos.bind(null, todo));


app.listen(PORT, error => {
  if (error)
    return console.error(error);

  console.log(`Server started on http://localhost:${PORT}`);
});