// \. Точка (.) как обычный символ, вместо "любой символ"
// \* Звёздочка (*) как обычный символ
// \+ Плюс (+) как обычный символ
// \? Вопросительный знак (?) как обычный символ

// Открывающая квадратная скобка ([)
// Закрывающая квадратная скобка (])

// \( Открывающая круглая скобка (()
// \) Закрывающая круглая скобка ())
// \{ Открывающая фигурная скобка ({)
// \} Закрывающая фигурная скобка (})
// \| Вертикальная черта (|, означает "или")
// \/ Обычный /, так как / используется для создания регулярного выражения
// \\ Сам обратный слэш (\)

// Специальные управляющие последовательности:

// \d Любая цифра (0-9)
// \D Любая не цифра
// \w Любая буква, цифра или _
// \W Любой не буквенно-цифровой символ
// \s Любой пробельный символ (пробел, табуляция, новая строка)
// \S Любой не пробельный символ
// \b Граница слова
// \B Не граница слова
// \n Перевод строки
// \t Табуляция
const word = "1998-hjklw:John";

// то есть если каретка находится внутри квадратных скобок - она обозначает отрицание
const notDigit = /[^0-9]/;

const digit = /\d/; // одна цифра
const nonDigitVer2 = /\D/; // одна цифра  ""

const letter = "9";

console.log(digit.test(letter));
// [0-9]  === \d
// [^0-9]  === \D

// alphanumeric symbols
// \w === [0-9A-Za-z_]
// \W === [^0-9A-Za-z_]

// \s - white space, tab, new line
const fullName = "John Bowie";

const regex2 = /John\sBowie/;

console.log(regex2.test(fullName));

const regex3 = /[A-Z][a-z]{3}\s[A-Z][a-z]{4}/; // если бы мы знали какая длинна имени и фамилии
console.log(regex3.test(fullName));

// если символ должен быть хотя бы один раз представлен, но может быть и больше
// + значит (1 или много)
const regex4 = /[A-Z][a-z]+\s[A-Z][a-z]+/;
console.log(regex4.test("Al Key")); // true
console.log(regex4.test("A Key")); // false

// символы, которые обозначают количество называются кванторами

// с помощью знака ? мы можем обозначать опциональный элемент (0 или 1 вхождение)
// вопрос ставится справа от нужного символа
const cameraModel = "Canon 5R";
const cameraModel2 = "Canon 5RD";
const cameraModel3 = "Canon 12RD";
const cameraModel4 = "Canon 1200RD"; // NOOO!!!
// сделаем выражение, которо бы подошло под оба варианта
const regex5 = /Canon \d\d?RD?/;

console.log(regex5.test(cameraModel));
console.log(regex5.test(cameraModel2));
console.log(regex5.test(cameraModel3));
console.log(regex5.test(cameraModel4));

// * значит неопределенное количество вхождений - (0 или более)

const regex6 = /\d*/; // 1   12  15 - ok  "1h" - не подойдет

// Группировка

const text = "I am programmer but you can never say. I am sure";

const regex7 = /(I) (am)/gi;

console.log(text.replace(regex7, `$2 $1`));

const fullNameReg = /([A-Z][a-z]+)\s([A-Z][a-z]+)/g;

const text2 = "I am Alisher Khamidov, I am looking for Eva Dieterle";

console.log(text2.replace(fullNameReg, `$2 $1`));

const phoneNumber = "adsasd  asdasd 0151 52466512 asdsa";

// +49 (151) 524 665 12

const phoneRegex = /0(\d{3})\s?(\d{3})(\d{3})(\d{2})/;

const maskedPhone = phoneNumber.replace(phoneRegex, `+49 ($1) $2 $3 $4`);
console.log(maskedPhone); // +49 (151) 524 665 12

// Code Wars 8 javascript

// Leet code - Java, Java Script

// input pattern 
