const express = require('express');
const app = express();
const cors = require('cors')

const routes = require('./routes/route');
const logger = require('./middleware/middleware');
const errorHandler = require('./middleware/errorHandler');

async function startServer(){

  try{
    app.use(cors());
    // Middleware для парсинга JSON
    app.use(express.json());

    app.use(logger);

    // Подключение роутов
    app.use('/api', routes);

    // Запуск главной страницы
    app.get('/', (req, res) => {
      res.json({message: 'Сервер запущен!!!'});
    })
    
    app.use(errorHandler);

    // Запуск сервера
    app.listen(3000, () => {
      console.log('Сервер запущен на порте 3000');
    })
  }catch(err){
    console.error('Ошибка при запуске сервера', err);
  }
}

startServer();
