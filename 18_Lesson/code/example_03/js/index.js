//HTTP
//status

//methods
//GET - получить информацию
//POST - создать информацию (ресурс)
//DELETE - удалить информацию (ресурс)

//структура запроса
//URL - https://www.amazon.com/new-releases/?_encoding=UTF8&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY
//протокол соединения -  https
//домен - amazon.com
//путь - new-releases/
//параметры запроса - ?_encoding=UTF8&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY

function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products[0]);
    })
    .catch((err) => {
      console.log(err);
    });
}

// fetchProducts();

function fetchProductsById(id) {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchProductsById(2)

//POST - используется для создания ресурса на бекенде. Часто - для логина и\или регистрации
//запрос на логин

fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({username: 'emilys',vpassword: 'emilyspass'}),
  credentials: 'include' // Include cookies (e.g., accessToken) in the request
})
.then(res => res.json())
.then(console.log)