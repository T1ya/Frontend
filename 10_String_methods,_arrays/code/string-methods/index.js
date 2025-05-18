let fruit = "apple";

let fruitUpper = fruit.toUpperCase();   // строки неиммутабельны
let fruitLower = fruit.toLowerCase();   // строки неиммутабельны

console.log(fruit[0]);  // чаров нет, но можно работать как с массивом
console.log(fruit.at(0));   //или так
console.log(fruit.charAt(0));   //или так

console.log(fruit.charCodeAt(0));   //вернёт CHAR-юникод символа

//конкатенация строк
const pineapple = "pine".concat("apple");

//обрезать строку
let cake = "circus";

console.log(cake.slice(5)); //s
console.log(cake.slice(1,3)); //ir, правый инлекс не включительно
console.log(cake.slice(-2)); //ir, правый инлекс не включительно

//взять подстроку
console.log(cake.substring(5)); //s
console.log(cake.substring(1,3)); //ir, правый инлекс не включительно
console.log(cake.substring(-2)); //не работает вообще


function getUserName(email) {
    let result = null;
    let at = email.indexOf("@");
    if (at) {
       result = email.slice(0,at);  
    }
    return result
}

function getFirstName(email) {
    let result = null;
    let div = email.indexOf("-");
    if (div) {
       result = email.slice(0,div);  
    }
    return result
}

function getEmailService(email) {
    let result = null;
    let at = email.indexOf("@");
    if (at) {
       result = email.slice(at, email.length);  
    }
    return result
}


let email = "ilya-malikov@gmail.com";

console.log(getUserName(email));
console.log(getFirstName(email));
console.log(getEmailService(email));
