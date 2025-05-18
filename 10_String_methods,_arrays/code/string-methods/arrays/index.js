//определение массива
const students = [];
const teachers = ["John", "Jane", "Tim"];

//определение массива 2
const animals = new Array();
const plants = new Array("Ambrosia", "Basil", "Camomile");

// Получить элемент по индексу
console.log(plants[1]); //Basil
console.log(plants.at(1)); //Basil
console.log(plants[10]); //undefined
console.log(plants.at(-2)); //Basil

//массивы JS являются динамическими и имеют доп свойства и методы
plants.push("Dandelion"); //добавляем элемент в конец массива
console.log(plants);

let dandelion = plants.pop(); //убираем элемент из конца массива и возвращаем элемент
console.log(plants);
console.log(dandelion);


// unshift - добавляет элемент в начало массива
plants.unshift("Avocado"); //добавляем элемент в конец массива
console.log(plants);

//shift убирает и возвращает первый элемент массива 
let avocado = plants.shift(); 
console.log(plants);
console.log(avocado);

