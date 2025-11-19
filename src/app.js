const express = require('express');
const app = express();

const routes = require('./routes/route')

async function startServer(){

  try{
    // Middleware для парсинга JSON
    app.use(express.json());

    // Подключение роутов
    app.use('/api', routes);

    // Запуск главной страницы
    app.get('/', (req, res) => {
      res.json({message: 'Сервер запущен!!!'});
    })

    // Запуск сервера
    app.listen(3000, () => {
      console.log('Сервер запущен на порте 3000');
    })

  }catch(err){
    console.error('Ошибка при запуске сервера', err);
  }
}

startServer();
