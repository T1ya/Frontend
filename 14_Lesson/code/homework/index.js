// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь

  //Пара мыслей
  //!!!! 1 я бы переместил создание кнопки внутрь листенера, а то по логике вещей кнопки не должно существовать при загрузке страницы
  // а у нас сейчас "несуществующая" кнопка висит в глобальном контексте
  // или хотя бы так сделал - объявил заранее let cloneBtn;

  // clonedBtn = btn.cloneNode(true); //активирую кнопку
  // clonedBtn.id = "magic-btn-2";    //добавляю ей айди

  //стили
  clonedBtn.className = "second-btn";
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
  //текст
  clonedBtn.innerText = "Я изменю тебя";
  document.body.appendChild(clonedBtn);


  //!!!! 2 Обработчик я бы тоже поместил сюда. Чтобы он появлялся только после создания кнопки cloneBtn

  // clonedBtn.addEventListener('click', ()=>{
  // btn.style.backgroundColor = "#9c4a1a";
  // btn.style.color = "black";
// })
})

// здесь можете создать EventListener для второй кнопки
clonedBtn.addEventListener('click', ()=>{
  //меняем стиль первой кнопки
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
})