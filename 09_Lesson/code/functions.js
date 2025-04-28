function sum(a,b) {
    return a+b;
}

function greeting(name) {
    return (name? `Hi ${name}, howdy?`: `Hi Dowson, howdy?`);
}

console.log(greeting("bob"));
console.log(greeting());