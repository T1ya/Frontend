// Array.prototype

// push, pop, shift, unshift - мутирующие методы
// at - аналог бокс синтаксиса
const fruits = ["apple", "orange", "grape"];

console.log(fruits.at(0));
// console.log(fruits[-1]);
console.log(fruits.at(-1));

// map
// создает новый массив, и не мутирует исходный
const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsUpper); // ["APPLE", "ORANGE", "GRAPE"];

const fruitLengthes = fruits.map((fruit) => fruit.length);
console.log(fruitLengthes); // [ 5, 6, 5 ]

// [ "5", "6", "5" ]
const strArr = fruits.map((fruit) => fruit.length.toString());
console.log(strArr);

// пример использования с массивами объектов
const animals = [
  { name: "Po", specie: "panda", weight: 300 },
  { name: "Tigrica", specie: "tiger", weight: 250 },
  { name: "Kovalsky", specie: "penguin", weight: 5 },
  { name: "Melman", specie: "giraffe", weight: 600 },
];

// хочу создать массив с более толстыми версиями этих животных

// const americanAnimals = animals.map((animal) => {
//   const americanAnimal = { ...animal };
//   americanAnimal.weight *= 1.3;
//   return americanAnimal;
// });

const americanAnimals = animals.map((animal) => ({
  ...animal,
  weight: animal.weight * 1.3,
}));

const foo1 = (a) => {
  return a;
};

const foo2 = (a) => a;

console.log(animals);
console.log(americanAnimals);

const animalsNames = animals.map((animal) => animal.name);
console.log(animalsNames); // [ 'Po', 'Tigrica', 'Kovalsky', 'Melman' ]

// Если мы хотим изменить исходный массив - элементы в нем, то лучше воспользоваться
// методом  forEach
// метод можно использовать, чтобы выполнить операции с каждым из элементов

// добавим в каждый объект исходного массива новое поле
// то есть мутируем каждое животное
// .isHealthy  true;

animals.forEach((animal) => {
  animal.isHealthy = true;
});

console.log(animals); //  [  { name: 'Po', specie: 'panda', weight: 300, isHealthy: true },

// reduce
// Мы решили отвезти на экскурсию автобусную
// грузоподьемность автобуса 2500 кг
// Сможем ли мы поместить животных в автобус

let acc = 0;
for (let i = 0; i < animals.length; i++) {
  acc += animals.at(i).weight;
}
console.log(acc);

const totalWeight = animals.reduce((acc, current) => acc + current.weight, 0);

// acc 0   current 300  = 0   + 300
// acc 300 current 250  = 300 + 250
console.log(totalWeight);

const dishes = [
  { name: "bamboo", calories: 500 },
  { name: "meat", calories: 1600 },
  { name: "fish", calories: 1000 },
];

// какая калорийность всех блюд?

// дополнительно, если мясо, то колорийность должна расчитываться
// в тройном размере от исходной
// const totalCalories = dishes.reduce(
//   (acc, dish) =>
//     acc + (dish.name === "meat" ? dish.calories * 3 : dish.calories),
//   0
// );

// console.log(totalCalories); // 3100

const totalCalories = dishes.reduce((acc, dish) => {
  if (dish.name === "meat") {
    return acc + dish.calories * 3;
  }
  return acc + dish.calories;
}, 0);

console.log(totalCalories); // 3100

// join
const fruitsCoctail = fruits.join("-");
console.log(fruitsCoctail); // "apple-orange-grape"

// split
const ensurance = "123.128.12412312";
const numsAsStrings = ensurance.split("."); // dilimeter - разделитель - символ, который отделяет друг от друга
console.log(numsAsStrings); // [ '123', '128', '12412312' ]

const nums = numsAsStrings.map((element) => Number(element));
console.log(nums); // [ 123, 128, 12412312 ]

// Пингвин заболел
// Найдем и заразим
animals.forEach((animal) => {
  if (animal.specie === "penguin") {
    animal.isHealthy = false;
  }
});

console.log(animals);

// К нам пришла инспеция
// Есть ли в нашем зоопарке больные животные
// Есть ли больные? true || false
// some - будет возвращать истину если предикат выполняется хотя бы у одного
const isQuaranteen = animals.some((animal) => animal.isHealthy === false);
console.log(isQuaranteen); // true

// Болеют ли все животные?
// every - будет возвращать истину если предикат выполняется для всех
const isEmidemy = animals.every((animal) => animal.isHealthy === false);
console.log(isEmidemy); // false

// Стало известно, то разыскивается. Его вид - tiger, а его имя "Killer"
// Есть в нашем зоопарке такой тигр?

// hasKiller
let hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);
console.log(hasKiller);
// к нам забрался киллер
animals.push({ name: "Killer", specie: "tiger", weight: 400 });

// снова проверим его наличие
hasKiller = animals.some(
  (animal) => animal.name === "Killer" && animal.specie === "tiger"
);

console.log(hasKiller);

// Как найти и получить элемент удовлетворяющий условию
// find

// Животное с именем киллер
const killer = animals.find((animal) => animal.name === "Killer");
console.log(killer); // { name: 'Killer', specie: 'tiger', weight: 400 }

// как найти индекс элемента удовлетворящего условию
const indexOfKiller = animals.findIndex((animal) => animal.name === "Killer");
console.log(indexOfKiller);

const indexOfPanda = animals.lastIndexOf((animal) => (animal.name = "Po"));

// slice

// создает копию из исходного массива. Указываем с какого инекса по какой
// первый параметр показывает начало - включительно
// втрой - не включительно, можно не указывать
// третий - необязательный параметр
const shortListOfAnimals = animals.slice(2, 4);

console.log(animals); // исходный массив не изменился
console.log(shortListOfAnimals);

// splice
// мутирующий!
const monthes = ["January", "February", "March", "April"];
// можно указать элементы, которые мы хотим подставить вместо вырезаного куска
// втрой параметр указывает сколько элементов мы вырезаем - количество
const removedMonthes = monthes.splice(2, 2, "July", "August"); // мутирует исходный массив
console.log(monthes); // [ 'January', 'February' ]
console.log(removedMonthes); // [ 'March', 'April' ]

const chars = ["@", "@", "@", "*", "*", "$"];
// "*" хочу заменит на "#"
const substitutes = ["#", "#"];
chars.splice(3, 2, ...substitutes);
console.log(chars);

// findIndex, splice

animals.splice(indexOfKiller, 1); // убрали элемент по индексу 
console.log(animals);

// 
const drinks = [
    { name: "Bloody Mary", strength: 14, price: 7 },
    { name: "Jin", strength: 25, price: 4 },
    { name: "Beer", strength: 7, price: 3.5 },
    { name: "Cider", strength: 2, price: 5 },
    { name: "Beer", strength: 7, price: 5 },
  ];
  
  // Задание 1
  // Найдите индекс Jin
  // Замените джин на объект "Tequilla"
  
  // Задание 2
  // Сделайте все напитки в масиве крепче на 1 градус
  
  // Задание 3
  // посчитайте стоимость всех пив
  
  // 1
  const indexOfJin = drinks.findIndex((drink) => drink.name === "Jin");
  console.log(indexOfJin);
  
  drinks.splice(indexOfJin, 1); // удалили по индексу
  console.log(drinks);
  
  // 2
  drinks.forEach((drink) => drink.strength++);
  console.log(drinks);
  
  // 3
  const totalBeerPrice = drinks.reduce((acc, drink) => {
    if (drink.name === "Beer") {
      return acc + drink.price;
    }
    return acc;
  }, 0);
  
  console.log(totalBeerPrice); // 8.5
  
  // filter
  // создает новый массив, в него войдут только элементы удовлетворяющие условию
  
  const beers = drinks.filter((a) => a.name === "Beer");
  
  console.log(beers); 
  // [
  //     { name: 'Beer', strength: 8, price: 3.5 },
  //     { name: 'Beer', strength: 8, price: 5 }
  // ]