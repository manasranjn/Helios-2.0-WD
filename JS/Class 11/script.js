//! Synchronous and Asynchronous
// console.log("One");
// console.log("Two");
// console.log("Three");
// console.log("Four");
// setTimeout(() => {
//     console.log("Five");
// }, 1000)
// console.log("Six");
// setTimeout(() => {
//     console.log("Seven");
// }, 100)
// console.log("Eight");

//! Callback Hell
// () => {
//     () => {
//         () => {
//             () => {

//             }
//         }
//     }
// }

//! Promise/fetch()

// fetch('api/url')
//     .then((res) => {
//         //instruction
//     }).catch((err) => {
//         //instruction
//     })

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        console.log(res)
        res.json()
            .then((data) => {
                console.log(data);
            })
    })
    .catch((err) => {
        console.log(err);
    })