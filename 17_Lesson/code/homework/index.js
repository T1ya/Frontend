// Задание 1 — Форматирование строки
// Создайте функцию, которая принимает строку в формате вида "1333.132.123 00" — числа могут быть любыми, но структура такая же: три группы, разделённые точками и пробелом.

// Цель: преобразовать строку к следующему формату: 📌 "1333 132:123-00"

function formatString(input) {
    // Ваша реализация здесь
    return input.replace(/([0-9]{4})\.([0-9]{3})\.([0-9]{3})\s([0-9]{2})/,`$1 $2:$3-$4`)
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"

// Задание 2 — Промис с рандомной ошибкой
// Создайте Promise, который с одинаковой вероятностью (50/50):

// либо возвращает строку "Best day of my life"
// либо выбрасывает ошибку с сообщением "Something is off"
// Затем обработайте результат с помощью .then() и .catch().

const randPromise = new Promise(function(resolve,reject) {
    let val = Math.random() < 0.5;
    setTimeout(() => {
        if (val) {
           resolve("Best day of my life")
        } else {
            reject(new Error("Something is off"))
        }
    }, 300);
})

randPromise
    .then((day) =>{
        console.log(day)
    })
    .catch((err)=>{
        console.log(err)
    })