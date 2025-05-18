function countToZero(count) {
    for (let index = count; index > 0; index-=3) {
        console.log(index)
    }
}

countToZero(80);

//while

const animals = ["aaa","bbb","ccc"]

let i = 0;
while (i < animals.length) {
    animals[i] = animals[i].toUpperCase();
    i++;
}

console.log(animals)