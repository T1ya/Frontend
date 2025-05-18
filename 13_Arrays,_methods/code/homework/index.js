// Задание 1
// У вас есть массив объектов:
// Создайте на основе старого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
console.log("Задание 1");
const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const engineTypes = cars.map(({ brand, isDiesel }) => ({ brand, isDiesel }));
console.log(engineTypes);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.
console.log("--------------------");
console.log("Задание 2");

const dieselCars = cars.filter((car) => car.isDiesel);
console.log(dieselCars);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
console.log("--------------------");
console.log("Задание 3");
const nonDieselCars = cars.filter((car) => car.isDiesel == false);
console.log(nonDieselCars);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.
console.log("--------------------");
console.log("Задание 4");
const nonDieselCarsPrice = nonDieselCars.reduce(
  (acc, car) => acc + car.price,
  0
);
console.log("Non-diesel cars total price: ", nonDieselCarsPrice);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.
console.log("--------------------");
console.log("Задание 5");
cars.forEach((car) => {
  car.price *= 1.2;
});
console.log(cars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
console.log("--------------------");
console.log("Задание 6");
const substitute = { brand: "Tesla", price: 25000, isDiesel: false };
const substituteCars = cars.map((car) => {
  if (car.isDiesel) {
    return substitute;
  } else return car;
});

console.log(substituteCars);
