// const emailInput=document.getElementById("email-id");
// console.log(emailInput);

const form = document.getElementById("student-form");
const emailInput = form.elements["email"];  //квадратные скобки!

function onSubmit(event) {
    event.preventDefault();
    console.log(emailInput.value);
}

form.addEventListener("submit", onSubmit)