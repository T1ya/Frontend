
const oneCatBtn = document.getElementById("one-cat");
const moreCatsBtn = document.getElementById("more-cats");
const catText = document.getElementById("cat-text");
const catContainer = document.getElementById("cat-container");

const catImg = document.createElement("img");
let count = 0;

function addCat(img) {
    img.setAttribute("src","https://media1.tenor.com/m/CNI1fSM1XSoAAAAd/shocked-surprised.gif");
    img.setAttribute("alt","shocked-cat");
    img.classList.add("image");
    catContainer.appendChild(img);
}

function catTextEditor() {
    let msg = `Вы добавили ${count} котик`;
    (count%10 == 1)?msg+="а":msg+="ов";
    return msg;
}

oneCatBtn.addEventListener("click", ()=>{
    catContainer.innerHTML="";
    addCat(catImg);
    catText.innerText = "Получите Вашего котика!";
    count = 0;
});

moreCatsBtn.addEventListener("click", ()=>{
    const catImg = document.createElement("img");
    addCat(catImg);
    count++;
    catText.innerText = catTextEditor();
})