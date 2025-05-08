console.log("Hello World");
//получаем элементы - берём ссылки на существующий элемент
const welcomeMessage = document.getElementById("welcome-message");  //id элемента
const magicBtn = document.getElementById("btn-js-example"); //id кнопки
const catBtn = document.getElementById("btn-cat"); //id кнопки
const catContainer = document.getElementById("cat-container");

//проверка что элемент получен
console.log(welcomeMessage);
console.log(magicBtn);
console.log(catBtn);
console.log(catContainer);

//Добавляем для кнопок eventListener - обработчик событий. Срабатывать будет при нажатии на кнопку ("click")
magicBtn.addEventListener("click", () => {
  console.log("Function is working!"); //проверка
  //innerText
  //а теперь обратимся к элементу и обновляем его значения и свойства
  welcomeMessage.innerText = "JavaScript changes text!";
});


//add new element - вне листенера. создали один раз, при нажатии на кнопку добавляем существующий элемент
const catImg = document.createElement("img",);

catBtn.addEventListener("click", ()=>{
    console.log("almost ready...");
    //add new element - а так будет добавляться новый элемент при каждом нажатии на кнопку!
    // const catImg = document.createElement("img",);
    //зададим атрибуты
    catImg.setAttribute("src","https://media1.tenor.com/m/CNI1fSM1XSoAAAAd/shocked-surprised.gif");
    catImg.setAttribute("alg","shocked-cat");

    //можем отредактировать стили здесь
    // catImg.style.width = "300px";
    // catImg.style.borderRadius = "20px";
    // catImg.style.margin = "25px";

    //но удобнее добавить через класс
    catImg.classList.add("catImg");

    //прикрепим картинку к контейнеру - appendChild
    catContainer.appendChild(catImg);

    
    
    console.log(catImg); //тест
})
