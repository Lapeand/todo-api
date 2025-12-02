let todos = [
  {id: 1, title: 'Первая задача',completed: false},
  {id: 2, title: 'Вторая задача', completed: true}
];



async function getAllTodos(req, res, next){
  try{
    res.json({message: 'Список всех задач:', todos});   
  } catch(err){
    next(err);
  }
}


async function createTodo(req, res, next){
  try{
    const {title, completed} = req.body;
    
    const newTodo = {
      id: todos.length > 0 ? todos[todos.length -1 ].id + 1 : 1,
      title,
      completed: completed ?? false
    }
    todos.push(newTodo);

    res.status(201).json({message: 'Задача создана'});
  } catch(err){
    next(err);
  }
  
}


async function updateTodo(req, res, next){
  try{
    const { id } = req.params;
    const {title, completed} = req.body;

    const todo = todos.find(t => t.id == id)

    if(!todo){
      return res.status(404).json({message: 'Задача не найдена' });
    }

    if(title !==undefined){
      todo.title = title;
    }
    if(completed !== undefined){
      todo.completed = completed;
    }

    res.json({message: 'Задача обновлена', todo});
  } catch(err){
    next(err);
  }
  
}


async function deleteTodo(req, res, next){
  try{
    const { id } = req.params;

    const todoId = todos.findIndex(t => t.id == id);
    if (todoId === -1){
      return res.status(404).json({message: 'Задача не найдена!'});
    }

    todos.splice(todoId, 1);
    
    res.json({message: 'Задача была удалена!'});
  } catch(err){
    next(err);
  }
}


module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
}