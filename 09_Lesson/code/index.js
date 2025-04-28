// Примитивы - number (+NaN, infinity), bigint, string, boolean, symbol, undefined, null
// Object - всё, что не примитив

// объявление переменных
const x = 10;   //не можем присвоить новое значение
let y = 12;     //здесь - можем

y = 13;     //  вполне можно
z = 14      //  можно, но не стоит (не была объявлена)
// x = 14;  //  нельзя!

// console.log(y, x, z);

// Operators


// Mathematic operators
// - + * / % **

let sum = 1 + 2;
console.log(sum);   // 3, num

let conc = "1" + 2;
console.log(conc);  //  12 str

let empl = true + 4
console.log(empl); //5, true->1

// Мат. операторы стараются преобразовать типы к математическим. В случае невозможности выведут NaN (что тоже число)
// (кроме оператора "+" он будет пытаться выполнить контакенацию в спорных случаях)
let nanEx = "a" - 4;
console.log(nanEx);

// Logical: 
// || or
// && and
// ! not

let exAnd = true && false; //false
let exOr = true || false; //true
let exNot = !true; //false

// усложняем
console.log(!!5); //true
console.log(!0); //true

// || - особенность
const myName = "Ilya";
const defName = "John";

console.log(myName||defName); //выберет первое true значение

// эти значения преобразуются к false - null, undefined, '', 0, NaN
// все остальные - к true

// Операторы сравнения > >= < <= == ===