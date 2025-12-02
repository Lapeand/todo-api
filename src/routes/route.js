const express = require('express');
const routes = express.Router();

const todoSchema = require('../middleware/validation/todoSchema')
const validate = require('../middleware/validation/validate')

const {getAllTodos, createTodo, updateTodo, deleteTodo} = require('../controllers/controler');

routes.get('/todos', getAllTodos)
routes.post('/todos', validate(todoSchema), createTodo)
routes.put('/todos/:id', updateTodo)
routes.delete('/todos/:id', deleteTodo)


module.exports = routes;
