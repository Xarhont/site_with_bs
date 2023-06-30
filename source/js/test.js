const button = document.getElementById("btn-1");
const div = document.getElementById("Tasks");

// function showMessage() {
//     alert("Всем привет!");
//     console.info("124454");
// }
// *********************
// button.addEventListener("click", test1);

// function test1 (){
//     const button = document.getElementById("btn-1");
//     const div = document.getElementById("Tasks");
//     const url = "http://127.0.0.1:5000/hello";
//     const method = "POST";
//     const data = {
//     name: "John Doe",
//     email: "john@example.com"
//     };
    
//     fetch(url, {
//     method,
//     headers: {
//             "Content-Type": "application/json",
//             },
//     body: JSON.stringify(data)
//     })
//     .then(response => response.text())
//     // .then(res >= console.log(res))
//     // .then(data >= (div.innerHTML = JSON.stringify(data)))
//     .then((data) => div.innerHTML = data)
//     .catch((error) => console.error(error));
// }
// ************************

const btn1 = document.getElementById('btn-1');
const input1 = document.getElementById('theme-1');

btn1.addEventListener('click', () => {
  fetch('http://127.0.0.1:5000/hello', {
    method: 'POST', // метод запроса
    headers: { // заголовки запроса
      'Content-Type': 'application/json' // тип данных
    },
    body: JSON.stringify({ // данные для отправки
      value1: input1.value // значение input поля
    })
  })
    .then(response => { // обработка ответа
      return response.text();
    })
    .then((result) => { // сохранение результата
        div.innerHTML = result;
    })
    .catch((error) => { // обработка ошибок
      console.error(`Ошибка: ${error}`);
    });
});

// fetch("http://127.0.0.1:5000/hello", {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//     username: "John",
//     password: "123456",
//     }),
//     }).then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


// button.addEventListener("click", function () {
//     const inputValue = document.querySelector("input").value;

//     fetch("http://127.0.0.1:5000/hello", { method: "POST", headers: { "Content-Type": "applications/json", }, body: JSON.stringify({ inputValue }), }).then(response => response.json()).then(data => { div.innerHTML = data.html; });
// });
// button.addEventListener("click", showMessage);

// function sendRequest(url, method, data) {
//     const request = new XMLHttpRequest();
  
//     request.open(method, url);
//     request.setRequestHeader("Content-Type", "application/json");
  
//     if (method === "POST") {
//       request.send(JSON.stringify(data));
//     } else {
//       request.send();
//     }
  
//     return new Promise((resolve, reject) => {
//       request.onload = () => {
//         if (request.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(new Error(`Ошибка при запросе: ${request.statusText}`));
//         }
//       };
  
//       request.onerror = () => reject(new Error("Ошибка запроса"));
//     });
//   }


// // button.addEventListener("click", test2);
// const data = { name: "John", age: 30 };
// const response = sendRequest("http://127.0.0.1:5000/hello", "POST", data);
// console.log(response); // объект с ответом сервера

// function sendAndGetResponse(endpoint, method, body) {
//     // Создаем объект XMLHttpRequest
//     let xhr = new XMLHttpRequest();
  
//     // Устанавливаем метод запроса и URL-адрес
//     xhr.open(method, endpoint);
  
//     // Отправляем запрос
//     xhr.send(body);
  
//     // Обрабатываем ответ
//     xhr.onload = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         // Получаем ответ
//         let response = xhr.response;
  
//         // Выводим ответ на консоль
//         console.log("Ответ: ", response);
//       }
//     };
//   }
  
//   // Пример использования функции
//   let endpoint = "http://127.0.0.1:5000/hello";
//   let method = "POST";
//   let body = { username: "John", password: "123456" };
  
//   sendAndGetResponse(endpoint, method, JSON.stringify(body));