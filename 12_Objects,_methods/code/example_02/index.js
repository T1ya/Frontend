const leon = {
    name:"Leon",
    sayHello() {
        console.log("Hello, I am",this.name);
    }
}

leon.sayHello();


//example circle
const circle = {
    radius: 5,
    getArea() {
        return Math.PI*this.radius**2
    }
}

//example square
const square = {
    sideLength: 13,
    getPerimeter() {
        return this.side*4
    },
    getSquare() {
        return this.side**2
    }
}

function increaseSquareSide(obj, increaseRate) {
    obj.sideLength = obj.sideLength*increaseRate
}

for (let index = 0; index < 10; index++) {
    increaseSquareSide(square,2);
    console.log("New square side size: ", square.sideLength)
}