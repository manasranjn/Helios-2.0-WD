//! Operators
//? Arithmetic Operators
let a = 10
let b = 3

// console.log(a + b) // Addition
// console.log(a - b) // Subtraction
// console.log(a * b) // Multiplication
// console.log(a / b) // Division
// console.log(a % b) // Modulus
// console.log(a ** b) // Exponentiation

//? Assignment Operators
let x = 5
x += 2 // x = x + 2
x -= 3 // x = x - 3
x *= 4 // x = x * 4
x /= 2 // x = x / 2
x %= 3 // x = x % 3
x **= 2 // x = x ** 2
// console.log(x)

//? Comparison Operators
let c = 10
let d = 5
let e = '10'
// console.log(c == e) // Equal to
// console.log(c === e) // Strict equal to
// console.log(c == d) // Not equal to
// console.log(c === d) // Not equal to

// console.log(c != d) // Not equal to
// console.log(c !== d) // Strict not equal to
// console.log(c > d) // Greater than
// console.log(c < d) // Less than
// console.log(c >= d) // Greater than or equal to
// console.log(c <= d) // Less than or equal to

//? Logical Operators
let p = true
let q = false
let r = true
//* AND Operator
// console.log(p && q);
// console.log(p && r);

//* OR Operator
// console.log(p || q);
// console.log(p || r);

//* NOT Operator
// console.log(!p);
// console.log(!q);

//? Unary Operators
//* Increment Operator
let i = 5
// console.log(i++) // Postfix increment
// console.log(i);

// console.log(++i) // Prefix increment

//* Decrement Operator
let j = 5
// console.log(j--) // Postfix decrement
// console.log(j);
// console.log(--j) // Prefix decrement
// console.log(j);
// console.log(j++);
// console.log(++j);
// console.log(j++);
// console.log(j--);
// console.log(++j);

//! Conditional Statements
//? If Statement
// let age = 18
// if (age >= 18) {
//     console.log('You are an adult.');
// }

//? If-Else Statement
// let age = 36
// if (age >= 18) {
//     console.log('You are an adult.');
// } else {
//     console.log('You are a minor.');
// }

//? If-Else If-Else Statement
let age = 22
// if (age < 13) {
//     console.log('You are a child.');
// } else if (age < 20) {
//     console.log('You are a teenager.');
// } else if (age < 65) {
//     console.log('You are an adult.');
// } else {
//     console.log('You are a senior citizen.');
// }

// if (age > 0 && age < 18) {
//     console.log('You are a minor.');
// } else if (age >= 18 && age < 65) {
//     console.log('You are an adult.');
// } else if (age >= 65 && age < 100) {
//     console.log('You are a senior citizen.');
// } else if (age > 100) {
//     console.log('You are Dead.');
// } else {
//     console.log('You are a ghost');
// }

//? Switch Statement
let day = 9
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}