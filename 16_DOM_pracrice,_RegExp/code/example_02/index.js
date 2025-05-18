const text1 = "Hello Ilia, hello Anna! Nice to meet you!"

//регулярные выражения
console.log(text1.match(/Hello/));

console.log(text1.replace(/Hello/, "Good day"));

//что такое флаги?
const text2 = "Apple Orange apple orange Apple Orange apple orange Apple Orange apple orange";
// const newText = text2.replace(/Apple/,"banana");    //заменит первое вхождение
// const newText = text2.replace(/Apple/g,"banana");    //g - позволяет работать со всеми вхождениями
const newText = text2.replace(/Apple/gi,"banana");    //i - делает нечуствительным к регистру
console.log(newText);


//a87;
//b675;
//c99;

//x88y - нет

const code = "Cakea87";

console.log(code.match(/.87/)); //точка соответствует любому символу

//проверим, начинается ли выражение со слова Cake
console.log(code.match(/^Cake/)); // каретка ^ обозначает начало строки 

const text3 = "hate";
//hate
//late
//bate 
//wate - не ОК
console.log(text3.match(/[hlb]ate/));



