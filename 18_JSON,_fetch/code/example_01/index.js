// JSON - JavaScript Object Notation

//Объект в формате JavaScript
const user = {
    name: "John",
    age: 18
};

//Мы не можем передать объект в таком виде на сервер - туда должен идти ТЕКСТ или СТРОКА. Или разметка HTML

//Поэтому основной формат передачи и хранения информации - JSON
const userAsJSONString = JSON.stringify(user);
console.log(userAsJSONString)

