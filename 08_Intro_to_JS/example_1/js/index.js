console.log("Hello, world!")

//let - явное объявление переменной. Объявляет переменную в блоке.
let x = 6;
//без let переменная автоматически объявляется в глобальном scope 
x = 6;
// а ещё JS язык с нестрогой типизацией
x = 'boooo';

// 7 примитивных типов данных в JavaScript

// 1. Number - число
let age = 30; // целое число
let pi = 3.14; // число с плавающей точкой
console.log(`Age: ${age}, Pi: ${pi}`);

// 2. String - строка
let name = "Ilia";
let greeting = `Hello, ${name}!`; // строка с интерполяцией
console.log(greeting);

// 3. Boolean - логический тип (true/false)
let isSunny = true;
let hasUmbrella = false;
console.log(`Is it sunny? ${isSunny}. Do you have an umbrella? ${hasUmbrella}`);

// 4. Null - значение "ничего"
let job = null; // нет работы
console.log(`Job: ${job}`);

// 5. Undefined - переменная объявлена, но не инициализирована
let car; // переменная объявлена, но значение не задано
console.log(`Car: ${car}`);

// 6. Symbol - уникальный и неизменяемый идентификатор
let uniqueId = Symbol("id");
let anotherId = Symbol("id");
console.log(uniqueId === anotherId); // false, каждый символ уникален

// 7. BigInt - целые числа произвольной длины
let bigNumber = 1234567890123456789012345678901234567890n; // добавляем "n" для BigInt
let anotherBigNumber = BigInt("9007199254740993"); // создаём через BigInt
console.log(`Big number: ${bigNumber}, Another big number: ${anotherBigNumber}`);
