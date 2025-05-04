// Задание 1
// Используя деструктуризацию объекта, получите в отдельные переменные цвет стен, и адрес.

const house = {
    adress: "Pfondorfer str 69",
    postIndex: 10408,
    roofColor: "red",
    wallColor: "green",
  };

const {adress, postIndex, roofColor, wallColor} = house;

console.log("Task 1:")
console.log(adress);
console.log(postIndex);
console.log(roofColor);
console.log(wallColor);

// Задание 2
// 🍏 Создайте метод, который принимает массив стрингов и еще один параметр типа стринг prefix. Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива, слева к которым присоединен префикс.
// Исходный массив должен остаться неизменным.
// Пример: ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]
function newArrWithPrefix(arr, prefix) {
    if(arr.length < 1) return arr;
    const result = [...arr];
    for (let i =0; i < result.length; i++) {
        result[i] = prefix.concat(result[i]);
    }
    return result;
}

const fruits = ["apple", "peach","orange"];
console.log("------------------------------")
console.log("Task 2:")
console.log(newArrWithPrefix(fruits,"pine"));


// Задание 3
// Создайте функцию gardender, которая принимает в себя два параметра: операцию и предмет, на который эта операция будет направлена.
// Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " плюс название конкретного цветка.
// Вызовите фунцкию gardender c параметрами: функция поливать цветок, 'rose'.
// Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 🧑‍🌾

function gardener(toDo, plant) {
    try {
        if (typeof toDo !== "function") {
            throw new Error("First argument should be a function")
        }
        if(typeof plant !== "string" || !plant) {
            throw new Error("Error - wrong plant name")
        }
        toDo(plant);
    } catch (error) {
       console.error("Error caught: ", error.message)
    }
}

function toWater(plant) {
    console.log("I water " + plant);
}

function toTrim(plant) {
    console.log("I trim " + plant);
}

function toPlant(plant) {
    console.log("I plant " + plant);
}

console.log("------------------------------")
console.log("Task 3:")
gardener(toWater,"roses");
gardener(toTrim,"grass");
gardener(toPlant);
gardener("quack","cucumbers");
gardener(toTrim,3)
gardener(toPlant,"cucumbers");