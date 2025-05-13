const form = document.getElementById("personal-data-form");
console.log(form);
const heightInput = form.elements["height"];
const genderInput = form.elements["gender"];
const resultCard = document.getElementById("result-card");

function onSubmit(e) {
  e.preventDefault();
//   console.log(heightInput.value, genderInput.value);
    if(validateInput) {
        const idealWeight = gedProperWeight(
            heightInput.value,genderInput.value
        )
        resultCard.innerText = "Ваш идеальный вес = "+ idealWeight + " кг";
    }
    
}

function gedProperWeight(height, gender) {
  let substract = 100;
  if (gender == "female") substract = 110;
  return height - substract;
}

function validateInput() {
  const h = parseInt(heightInput.value);
  if (h && h > 0 && h < 250) {
    return true;
  }
  return false;
}

form.addEventListener("submit", onSubmit);
