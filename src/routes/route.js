const express = require('express');
const routes = express.Router();

const {getAllTodos, createTodo, updateTodo, deleteTodo} = require('../controllers/controler');

routes.get('/todos', getAllTodos)
routes.post('/todos', createTodo)
routes.put('/todos/:id', updateTodo)
routes.delete('/todos/:id', deleteTodo)


module.exports = routes;
