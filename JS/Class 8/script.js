//! DOM Manipulation
//? Create and Insert new Element
// const box = document.querySelector('.box')
// box.style.backgroundColor = 'green'
// box.style.color = 'white'

//* Create
const newPara = document.createElement('p')
// console.log(newPara)

newPara.textContent = "This is a new Paragraph"

// newPara.innerText = "This is a new Paragraph"

// newPara.innerHTML = "This is a new Paragraph"
// console.log(newPara)

//* Read/Insert
// box.append(newPara)
// box.prepend(newPara)
// box.before(newPara)
// box.after(newPara)

//? Attribute Manipulation(Update)
const container = document.querySelector('.box')

const id = container.getAttribute('id')
// console.log(id);

// container.setAttribute('class', 'show')

const image = document.getElementById('image')

// image.setAttribute('height', '300')
// image.setAttribute('src', 'https://cdn.pixabay.com/photo/2026/07/29/20/30/20-30-42-74_1280.jpg')

image.height = '300'
image.src = 'https://cdn.pixabay.com/photo/2026/07/29/20/30/20-30-42-74_1280.jpg'

//? Delete
image.remove()