// Задание 1
// Создайте метод validate, который принимает строку и возвращает true, если она соответствует следующему шаблону:
// начинается с одной маленькой буквы латинского алфавита (a–z);
// затем идёт число 19;
// далее — две любые цифры (00–99);
// строка должна **заканчиваться на "born"`.

function validate(str) {
    return /[a-z]19[0-9][0-9]born/.test(str);
}

console.log(validate("c1986born")); // true
console.log(validate("b1988born")); // true
console.log(validate("1986born")); // false — нет начальной буквы
console.log(validate("c1886born")); // false — не 19XX
console.log(validate("c1986bor")); // false — не заканчивается на 'born'

//Задание 2
// Замените все вхождения слова "javascript", независимо от регистра, на слово "TypeScript".

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";
const newSentence = sentence.replace(/javascript/gi, "TypeScript");
console.log(newSentence);