function handleClick() {
    const heading = document.createElement('h1')
    heading.textContent = "This is a new Heading"

    const btn = document.querySelector('button')
    btn.after(heading)
}


const button = document.getElementById('btn')
button.ondblclick = () => {
    button.style.color = 'white'
    button.style.backgroundColor = 'brown'
}

const input = document.querySelector('input')
input.onchange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.target.value);
}


const box = document.querySelector('.box')
box.style.backgroundColor = "black"
box.style.height = '500px'
box.style.padding = '20px'

const button2 = document.querySelector('.change')

button2.onclick = () => {
    if (box.style.backgroundColor == "black") {
        box.style.backgroundColor = 'white'
    } else {
        box.style.backgroundColor = 'black'

    }
}