const allProducts = document.querySelector('.products')

function getProducts() {
    fetch('https://dummyjson.com/products')
        .then((res) => {
            // console.log(res);
            res.json()
                .then((data) => {
                    // console.log(data.products);

                    data.products.forEach((item) => {
                        // console.log(item);

                        const img = document.createElement('img')
                        const title = document.createElement('h3')
                        const price = document.createElement('h5')
                        const description = document.createElement('p')

                        const product = document.createElement('div')
                        product.setAttribute('class', 'product')

                        img.src = item.images[0]
                        title.textContent = item.title
                        price.textContent = "$ " + item.price
                        description.textContent = item.description

                        product.append(img)
                        product.append(title)
                        product.append(price)
                        product.append(description)

                        allProducts.append(product)
                        // console.log(allProducts);
                    })
                })
        })
        .catch((err) => {
            console.log(err);
        })
}

document.getElementById('btn').onclick = () => {
    getProducts()
}