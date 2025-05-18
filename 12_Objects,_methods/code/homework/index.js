// Задание 1
// Создайте метод, который принимает объект, а возврщает новый объект, в котором ключи и значения поменялись местами.
// {name: "Bob"} --> {"Bob": "name"}
// (вам понабится поработать с Object.values, Object.keys )
function switchKeysAndVals(obj) {
  const result = {};
  for (var key in obj) {
    var val = obj[key];
    result[val] = key;
  }
  return result;
}
console.log("Задание 1");
const tom = { name: "Tom", age: "19", height: "176" };
const mot = switchKeysAndVals(tom);
console.log("Tom: ", tom);
console.log("Mot: ", mot);

// Задание 2
// Создайте объект дуб oak с полем высота height и полем год year и методом расти grow.
// Пусть изначальная высота дуба будет 140 см, а год будет 2025.
// При вызове метода grow пусть дуб растет на 30 сантиметров, а год меняется на следующий.
// Запустите цикл и покажите, как дуб будет расти на протяжении 20 лет.
const oak = {
  height: 140,
  year: 2025,
  grow() {
    this.height += 30;
    this.year++;
  },
};
console.log("---------------------------");
console.log("Задание 2");
function growOak(yearsToGrow) {
  let i = 0;
  console.log("Растим дуб");
  while (i < yearsToGrow) {
    console.log(`Год ${oak.year}, высота дуба ${oak.height} см`);
    oak.grow();
    i++;
  }
  console.log(
    `Через ${yearsToGrow} лет, к ${oak.year} году дуб вырастет в высоту ${oak.height} см`
  );
}

growOak(20);

// Задание 3 дополнительное!
// Попробуйте сохранить метод grow во внешнем от объекта контесте и вызвать его с другими растениями при помощи bind или apply.
console.log("---------------------------");
console.log("Задание 3");

function growPlant(plant, yearsToGrow) {
  if (!plant || typeof plant !== "object") {
    throw new Error("неверный тип агрумента - plant должен быть объектом");
  }
  if (!plant.hasOwnProperty("year") || !plant.hasOwnProperty("height")) {
    throw new Error("plant не имеет свойств year и height");
  }
  if (typeof plant.year !== "number" || typeof plant.height !== "number") {
    throw new Error("свойства year и height должны быть числами");
  }

  let i = 0;
  console.log(`Растим ${plant.name}`);
  while (i < yearsToGrow) {
    console.log(`Год ${plant.year}, высота растения: ${plant.height} см`);
    oak.grow.call(plant);
    i++;
  }
  console.log(
    `Через ${yearsToGrow} лет, к ${plant.year} году ${plant.name} вырастет в высоту ${plant.height} см`
  );
}

const cactus = { name: "кактус", year: 2025, height: 15 };
const bamboo = { name: "бамбук", year: 2025, height: 25 };
const kebab = "Шиш-кебаб";
const berry = { name: "ягода", height: 15 };

growPlant(cactus, 10);
growPlant(bamboo, 10);
// growPlant(kebab, 100);  //error
// growPlant(berry, 2);   //error
