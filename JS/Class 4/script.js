//! Loops
//? For Loop
// for (initialization; condition; increment / decrement) {
//     // code to be executed
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for(let i =10; i > 0; i--){
//     console.log(i);
// }

//? while Loop
// initialization
// while (condition) {
//     // code to be executed
//     increment / decrement
// }

// let i = 0
// while (i < 5) {
//     console.log(i);
//     i++;
// }

//? do while Loop
// initialization
// do {
//     // code to be executed
//     // increment / decrement
// } while (condition);

// let i = 10
// do {
//     console.log(i);
//     i++;
// } while (i < 5);

//? for...of Loop
let arr = [1, 2, 3, 4, 5];
let str = "Hello World";

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let i of arr) {
//     console.log(i);
// }

// for (let s of str) {
//     console.log(s);
// }

//? for...in Loop
const obj = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: true
}

// for (let k in obj) {
//     console.log(k);
//     console.log(obj[k]);
// }
// for (let i in str) {
//     console.log(i);
//     console.log(str[i]);
// }

//! Functions
//* Inbuilt Functions/ Predefined Functions
// map(), filter(), slice(), toUpperCase(), log(), alrt(), prompt()

// alert("Welcome to JavaScript Functions!");
// let name = prompt("Enter your name: ");
// console.log(name);

//* User Defined Functions
//? Normal Function
function addition() {
    console.log(10 + 20);
}

// addition(); // calling the function

//? Arrow Function
const subtraction = () => {
    console.log(20 - 10);
};
// subtraction(); // calling the arrow function

//? Anonymous Function
const multiplication = function () {
    console.log(10 * 20);
};
// multiplication(); // calling the anonymous function

//? Callback Function
function greet(callback) {
    callback();
}

greet(() => {
    console.log("Welcome to JavaScript Functions!");
});
greet(function () {
    console.log("Welcome to JavaScript Functions!");
});