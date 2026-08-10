//! DOM
// console.log(window)
// console.log(document);

//! DOM Selection Methods
//? getElementById()
const heading = document.getElementById('heading')
// console.log(heading);

//? getElementsByClassName()
const headingElements = document.getElementsByClassName('head')
// console.log(headingElements);

//? getElementsByTagName()
const elements = document.getElementsByTagName("h1")
// console.log(elements);

//? getElementsByName()
const inputs = document.getElementsByName("email")
// console.log(inputs);

//? querySelector()
const node1 = document.querySelector('h1')
// console.log(node1);
const node2 = document.querySelector('#heading')
// console.log(node2);
const node3 = document.querySelector('.head')
// console.log(node3);

//? querySelectorAll()
const nodes = document.querySelectorAll('.head')
console.log(nodes);
