const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Ford", price: 25000, isDiesel: false },
];

//reverse - мутирующий, возвращает ссылку на исходный массив

cars.reverse();
console.log(cars);

//sort - сортирует массив

const parts = ["wheels","axis","tires","accumulator","bench"];

parts.sort(); //alphabetic sort by default
console.log(parts);

const nums =[1,42,2,132,-1,3,5,6,9,87];
nums.sort();    //alphabetic sort by default
console.log(nums);
//в параметрах можно указать функцию сортировки
nums.sort((a,b)=>a-b);
console.log(nums);

nums.sort((a,b)=>b-a);
console.log(nums);

parts.sort((a,b)=>b.localeCompare(a)); 
console.log(parts);

//сортировка по полям объектов
cars.sort((a,b)=>a.price-b.price);
console.log(cars);

cars.sort((a)=>a.price);
console.log(cars);

// сравнение по нескольким параметрам - сперва по цене, потом по алфавиту
cars.sort((a,b)=>{
    const priceComp = a.price-b.price;
    if(priceComp == 0) {
        return a.brand.localeCompare(b);
    }
    return priceComp
})

console.log(cars)