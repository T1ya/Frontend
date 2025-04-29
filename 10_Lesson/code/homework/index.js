// Task 1
// Создайте метод который принимает массив и возврашает новый! массив с теми же данными, но первый и последний элементы в массиве должны быть поменяны местами.
// Исходный массив должен остаться неизмененным после вызова метода.
function returnAndSwap(arr) {
  const result = [...arr];
  const firstElement = result.shift();
  const lastElement = result.pop();

  result.unshift(lastElement);
  result.push(firstElement);

  return result;
}

// Task 2
// Создайте метод который принимает массив строк, ничего!! не возвращает. Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.
// ["apple", "orange"] ---> ["Apple", "orange"]

function capitalizeFirstElement(arr) {
  if (arr.length > 0 && typeof arr[0] == "string") {
    arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  }
}

///////////////////////////////////////
const originalArray = ["apple", "banana", "cucumber", "durian"];
const copyArray = returnAndSwap(originalArray);

console.log("1. original array: ", originalArray);
console.log("2. copied array: ", copyArray);

capitalizeFirstElement(originalArray);
console.log("3. modified original array: ", originalArray);
