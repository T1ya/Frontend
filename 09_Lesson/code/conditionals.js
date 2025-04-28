//Conditional operators

//if

let age = -14;

if (age > 18) {
    console.log("access granted");
}
else if(age <= 0){
    console.log("incorrect age");
}
else{
    console.log("access denied");
}


//switch case

const country = "UK"

switch (country) {
    case "UK":
        console.log("London")
        break;
    case "USA":
            console.log("Washington")
        break;
    case "France":
            console.log("Paris")
        break;
    default:
        console.log("No capital found");
        break;
}


let myAge = 5;

switch (myAge) {
    case 1:
        console.log("Baby");
        break;
    case 2:
        console.log("Toddler");
        break;
    case 5:
        console.log("Scholar");
        break;
    case 16:
        console.log("Teenager");
        break;
    case 45:
        console.log("Adult");
        break;
    default:
        console.log("Nice age!");
        break;
}

console.log(12-3 + true + "12" + Boolean(NaN));