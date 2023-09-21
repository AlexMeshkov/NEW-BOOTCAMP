// const fs = require('fs');


// const data = fs.readFileSync('info.json', 'utf-8');

// console.log(JSON.parse(data));

const fs = require('fs');

try {
  const data = fs.readFileSync('info.json', 'utf-8');
  const jsonData = JSON.parse(data);
  console.log(jsonData);
} catch (error) {
  console.error('Произошла ошибка:', error);
}

// fetch('https://api.example.com/data') // Посылаем запрос к адресу 'https://api.example.com/data'
//   .then(response => response.json()) // Получаем ответ и преобразуем его в JSON
//   .then(data => console.log(data)) // Используем полученные данные
//   .catch(error => console.error('Произошла ошибка:', error)); // Обрабатываем ошибку, если она есть
