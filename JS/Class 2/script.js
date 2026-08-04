// console.log("Hello, World!");

//! Data Types
//* Primitive Data Types
//? Number
let a = 10
let b = -20
let c = 3.14
// console.log(a, b, c);
// console.log(typeof a, typeof b, typeof c);

//? String
let s1 = "Hello"
let s2 = '1234567'
let s3 = "!@#$%^&*()_+"
// console.log(s1, s2, s3);
// console.log(typeof s1, typeof s2, typeof s3);

//? Boolean
let isTrue = true
let isFalse = false
// console.log(isTrue, isFalse);
// console.log(typeof isTrue, typeof isFalse);

//? Undefined
let x
// console.log(x);
// console.log(typeof x);

// const p = 0

//? Null
n = null
// console.log(n);
// console.log(typeof n);

//? Symbol
let sym = Symbol("id")
// console.log(sym);
// console.log(typeof sym);

//? BigInt
// let bigInt = BigInt(1234567890123456789012345678901234567890)
// console.log(bigInt);
// console.log(typeof bigInt);

//* Reference/Non-Primitive Data Types
//? Array
let arr = [1, 2, 3, true, "Hello", null, undefined, [1, 2, 3]]
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[4][0]);
// console.log(typeof arr);
// console.log(arr[-3]); //not valid in JS

//? Object
let obj = {
    name: "John",
    age: 30,
    isMarried: false,
}
// console.log(obj)
// console.log(typeof obj)
// console.log(obj.name)
// console.log(obj['age'])

//? Function
function sayHello() {
    console.log("Hello, World!");

    console.log("Good Evening!");
}

// sayHello()