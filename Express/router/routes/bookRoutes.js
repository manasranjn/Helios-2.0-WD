const express = require('express')
const bookRouter = express.Router()

bookRouter.get("/", (req, res) => {
    res.send("Hello, this is book page")
})
bookRouter.post("/", (req, res) => {
    res.send("Book created")
})
bookRouter.put("/", (req, res) => {
    res.send("Book updated")
})
bookRouter.delete("/", (req, res) => {
    res.send("Book deleted")
})

module.exports = bookRouter