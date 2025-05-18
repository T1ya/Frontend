const heading = document.getElementById("heading");
const piratePic = document.getElementById("pirate-pic");
const favDrink = document.getElementById("drink");
const parrotContainer = document.getElementById("parrot-container")


fetch("https://t1ya.github.io/fake-pirate/pirate.json") //вернёт Promise<res> - ответ сервера - поток данных
  // Получим res - это ответ сервера, поток данных

  // Статусы
  // HTTP - протокол клиент-серверного взаимодействия
  // Статусы:
  // 200 - Success - успех - получили ответ
  // 401 - Not Authorized -
  // 403 - Access Denied - доступ запрещен
  // 404 - Not found
  // 500 - Server error

  // 200-299 - положительные статусы
  // 300-400 - редирект
  // 400-500 - ошибки

  .then((res) => {
    // console.log(res)         //res - это ответ сервера, поток данных
    // console.log(res.status); //получим код статуса
    // console.log(res.ok); //true или false, в зависимости от того найден ли документ
    if (res.ok) return res.json();
    else {
      throw new Error("wrong URL");
    }
  })
  .then((data) => {     //a это уже данные страницы, готовый JavaScript объект
    console.log(data);  //тут мы получаем данные из JSON
    //destructurisation assemblance - 
    const{name,url,favoriteDrink,parrots} = data;
    //присваиваем значения
    heading.innerText = name;
    piratePic.src = url;
    favDrink.innerText = "I love to drink "+favoriteDrink+"!";

    parrots.forEach((parrot)=>{
        const parrotCard = document.createElement("li");
        parrotCard.innerText = parrot.name;
        parrotContainer.appendChild(parrotCard);
    })
  });
