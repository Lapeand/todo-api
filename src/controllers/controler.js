let todos = [
  {id: 1, title: 'Первая задача', completed: false},
  {id: 2, title: 'Вторая задача', completed: true}
];



async function getAllTodos(req, res){
  res.json({message: 'Список задач из контролера'});
}

async function createTodo(req, res){
res.json({message: 'Создание задачи из контролера'});
}

async function updateTodo(req, res){
  res.json({message: 'Обновление задачи из контролера'});
}

async function deleteTodo(req, res){
  res.json({message: 'Удаление задачи из контролера'});
}

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
}