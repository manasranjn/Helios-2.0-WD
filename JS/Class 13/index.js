const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    console.log(res);

    const data = await res.json()
    console.log(data.products);

}

// getProducts()
// console.log("gfkhg");

//! Hoisting 
//? Variable Hoisting
// console.log(x); //not supported

let x
// console.log(x);

// console.log(y);
var y = 10
// console.log(y);

//? Function Hoisting
// sayHello()
// greet() // not supported

function sayHello() {
    console.log("Hello everyone");
}

const greet = () => {
    console.log("Good Evening");
}

// sayHello()
// greet()

//! Destructuring
const marks = [20, 24, 32, 27]
// console.log(marks[1]);

const [a, b, c, d] = marks
// console.log(a, b, c, d);

const person = {
    name: "Smith",
    address: "NY",
    age: 25,
    isWorking: true
}
// console.log(person.name, person.address, person.age, person.isWorking);

const { name, address, age, isWorking } = person
// console.log(name, age, address, isWorking);

let aa = 10

// function square() {
//     return a * a
// }

// console.log(square());
