const form = document.getElementById("myForm");
const nickname = form.elements["nickname"];
const age = form.elements["age"];
const breed = form.elements["breed"];

const animalsContainer = document.getElementById("animals-container");
let animals = [
    {nickname: "Jack", age: 5, breed:"dog"},
    {nickname: "Poppy",age: 3, breed:"parrot"}
];

function renderAnimals(animals) {
    while (animalsContainer.firstChild) {
        animalsContainer.removeChild(animalsContainer.firstChild)
    }

    animals.forEach(animal => {
        const li = document.createElement("li");
        li.innerHTML=`<span>${animal.nickname}</span>, <span>${animal.age}</span>, <span>${animal.breed}</span>`;
        animalsContainer.appendChild(li);
    });
}

function addAnimalsToList(event) {
    event.preventDefault();

     if (!nickname.value.trim()) {
        alert("Введите имя животного!");
        return;
    }

    if (!age.value.trim() || isNaN(age.value) || age.value <= 0) {
        alert("Возраст должен быть числом больше 0!");
        return;
    }

    if (!breed.value.trim()) {
        alert("Введите породу!");
        return;
    }

    animals.push({nickname: nickname.value, age: Number(age.value), breed: breed.value});
    renderAnimals(animals);

    nickname.value = "";
    age.value = "";
    breed.value = "";
}

renderAnimals(animals);

form.addEventListener("submit", addAnimalsToList);