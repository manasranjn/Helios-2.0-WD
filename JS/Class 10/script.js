// const button = document.querySelector('button')

// function handleClick() {
//     console.log("Button Clicked");
//     button.style.backgroundColor = 'brown'
//     button.style.color = 'white'

//     const div = document.createElement('div')
//     div.innerHTML = '<h1>This is a new Heading </h1>'
//     button.after(div)
// }
// button.addEventListener('click', handleClick)

// setTimeout(() => {
//     button.removeEventListener('click', handleClick)
//     console.log("Event removed");
// }, 2000)


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old.`
        );
    }
}
const user1 = new Person("Alice", 25);
const user2 = new Person("Smith", 30)
// user1.introduce();

class Smith extends Person {
    greet() {
        console.log(`Hello, Good evening, my name is ${this.name}`);
    }

    introduce() {
        console.log("No data");
    }
}

const ob1 = new Smith("Smith", 20)
ob1.introduce()
ob1.greet()
console.log(ob1.age);
