//1 check js file
console.log("check");
//2 get element
const infoBtn = document.getElementById("get-info");
const removeInfoBtn = document.getElementById("remove-info");
//3 event Listener для кнопки
infoBtn.addEventListener("click", ()=>{
    // console.log("hanlaaa"); //check
    document.body.appendChild(infoMessage);
});

//4 создадим элемент параграфа с текстом
const infoMessage = document.createElement("p");
//5 добавим ему текст - изменим свойство innerText
infoMessage.innerText = "Sun is shining, the weather is sweeeet";

//6 чтобы удалить элемент со страницы - надо для него вызвать метод remove
removeInfoBtn.addEventListener("click", ()=>{
    infoMessage.remove();
});