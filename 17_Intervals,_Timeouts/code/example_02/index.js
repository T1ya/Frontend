//Асинхронный код

//Timers
// setTimeout(()=>{console.log("Hi")}, 2000);

let x;

setTimeout(()=>{x=10},0)    //no-go. Асинхронный код ВСЕГДА воспроизводится ПОСЛЕ синхронного

console.log(x);

const printHello = ()=>{
    console.log("Hello")
}

const itnervalHello = setInterval(printHello,20);   //тики, запускаем функцию с интервалом\

setTimeout(()=>{
    clearInterval(itnervalHello)  //останавливает выполнение интервала
},100)
    
// Promise. Его статусы - 

//fulfilled  выполнено
//rejected  отклонено
//pending   ожидание

const burgerPromise = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve("Tasty!")
    }, 300)
})

console.log(burgerPromise);

//подождать значение = раскрыть promise

burgerPromise.then((burger)=>{
    console.log(burger)
})

const badPromise = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        reject(new Error("The kitchen is on fire!"))
    }, 300)
})

badPromise
    .then((burger) =>{
        console.log(burger)
    })
    .catch((err)=>{
        console.log(err)
    })