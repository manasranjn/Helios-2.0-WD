const express = require('express')

const app = express()
const PORT = 5000

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.url, req.method)
    res.send('Hello World')
})
app.post('/', (req, res) => {
    console.log(req.url, req.method)
    res.send('Hello World Posted')
})

app.get('/about', (req, res) => {
    console.log(req.url, req.method)
    res.send('About Page')
})
app.put('/about', (req, res) => {
    console.log(req.url, req.method)
    res.send('About Page Updated')
})
app.put('/about/:id', (req, res) => {
    console.log(req.url, req.method, req.params.id)
    res.send(`Page Updated ${req.params.id}`)
})
app.get('/about/:id', (req, res) => {
    // console.log(req.url, req.method)
    console.log(req.params.id)
    res.send(`About Page ${req.params.id}`)
})


app.get('/search', (req, res) => {
    console.log(req.url, req.method, req.query)
    res.send(`Search Page ${req.query.name}`)
})


// app.post("/product", (req, res) => {
//     console.log(req.url, req.method)
//     res.send("Product Page Posted")
// })
// app.get("/product", (req, res) => {
//     console.log(req.url, req.method)
//     res.send("Product Page Get")
// })
// app.put("/product", (req, res) => {
//     console.log(req.url, req.method)
//     res.send("Product Page Updated")
// })
// app.delete("/product", (req, res) => {
//     console.log(req.url, req.method)
//     res.send("Product Page Deleted")
// })

app.route('/product')
    .get((req, res) => {
        console.log(req.url, req.method)
        res.json({ message: "Product Page Get" })
    })
    .post((req, res) => {
        console.log(req.url, req.method, req.body)
        res.send("Product Page Posted")
    })
    .put((req, res) => {
        console.log(req.url, req.method)
        res.send("Product Page Updated")
    })
    .delete((req, res) => {
        console.log(req.url, req.method)
        res.send("Product Page Deleted")
    })


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})