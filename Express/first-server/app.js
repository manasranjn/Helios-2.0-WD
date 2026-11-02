const express = require('express')

const app = express()
const PORT = 5000

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})