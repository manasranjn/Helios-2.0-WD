//? Function without Parameters
function add() {
    return 10 + 20
}

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

//? Function with Parameters
function addition(a, b) {
    return a + b
}

// console.log(addition(10, 20));
// console.log(addition(110, 320));
// console.log(addition(100, 230));

const subtract = (a, b) => {
    console.log(a);
    console.log(b);

    return a - b
}

// console.log(subtract(100, 20));

//? Default Parameters

// console.log(subtract(10));
const multiply = (a = 1, b = 1) => {
    console.log(a);
    console.log(b);

    return a * b
}

// console.log(multiply(10, 2));

//? map()
// let price = [100, 240, 430, 230, 450, 670, 1890]
// let newArr = price.forEach((item, idx) => {
//     console.log(item);
//     console.log(idx);

//     // return item - item * 0.2
// })
// console.log(newArr);

let newPrice = price.map((item, i) => {
    console.log(item);
    console.log(i);

    return item - item * 0.2
})
console.log(newPrice);


//? filter()
let filteredPrice = price.filter((item) => {
    return item >= 250
})
console.log(filteredPrice);

//? reduce()
let total = price.reduce((item, sum) => sum += item, 0)
console.log(total);

//? sort()
let price = [100, 240, 430, 230, 450, 670, 1890]
let ascArr = price.sort((a, b) => a - b)
console.log(ascArr);

let desArr = price.sort((a, b) => b - a)
// 240, 430, 230, 450, 670, 1890, 100
// 430, 240, 450, 670, 1890, 230, 100
//430, 450, 670, 1890, 240, 230, 100
// 450, 670, 1890, 430, 240, 230, 100
// 670, 1890,450, 430,...
// 1890, 670, ....  
console.log(desArr);
