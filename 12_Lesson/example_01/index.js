//object
//key - value

const user = {email: "x@gmail.com"};
const age = 18;

// age = 19; // нельзя
// user = {email: "y@gmail.com"}; //нельзя

user.email = "john@gmail.com"; // можно!

//добавить новое свойство
user.hairColor = "green";

//дичь...
user["foot size"] = 43;

console.log(user);

//как можно создать объект из переменных

const pandaName = "Po";
const pandaFood = "Bamboo";

const panda = {
    name: pandaName,
    pandaFood,  //short syntax - если свойство совпадает с ключом
}

const bobHeight = 184;
const bob = {
    height: bobHeight
}

const key1 = "name";
const giraffeSam = {
    name:"Sam",
    age:11
}

console.log(giraffeSam.key1); //undefined
console.log(giraffeSam[key1]); //Sam

//можем получить список ключей объекта
const giraffeKeys = Object.keys(giraffeSam);
console.log(giraffeKeys);

// и список значений
const giraffeValues = Object.values(giraffeSam);
console.log(giraffeValues);

//entries - пары "ключ-значение"
const entries = Object.entries(giraffeSam);
console.log(entries)

//freeze - не позволяет добавить в объект новые ключи
const breakfast = {
    title: "omlet",
    calories: 450,
}

Object.freeze(breakfast);
breakfast.warm = true;
breakfast.title = "mashup"; //тоже нельзя
console.log(breakfast);

//seal - позволяет защитить объект от добавления новых свойств, но редактировать их можно

const dinner = {
    title: "meal",
    calories: 1250,
}

Object.seal(dinner);
dinner.warm = true; //no-go
dinner.title = "soup";

console.log(dinner);

//create - создание объектов
const musician = Object.create({name: "Freddie Mercury"});

//assign - изменяет объект добавляя туда свойства
const address = {
    street: "Saarstrasse",
    number: 12
}

const firma = {
    title: "H&H"
}

Object.assign(firma,address);
console.log(firma)

//spread operator - аналог

const personalInfo = {
    name: "Fedor"
}

const medicalInfo = {
    bloodtype: "A+"
}

const fedor = {
    ...personalInfo,    //копирует ВСЕ поля personalInfo
    ...medicalInfo,     //копирует ВСЕ поля medicalInfo
    age: 19
}

console.log(fedor)


// task
function unify(obj, key, val) {
    return {...obj, key:val}
}

const a = {

}

const b = unify(a,"key","val");

console.log(a);
console.log(b);


