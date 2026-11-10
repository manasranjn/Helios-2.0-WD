const express = require("express")
const router = express.Router()

const userRouter = require('./usersRouter')
const loginRouter = require('./loginRoutes')
const productsRouter = require('./productsRoutes')
const bookRouter = require('./bookRoutes')

router.use('/users', userRouter)
router.use('/login', loginRouter)
router.use('/products', productsRouter)
router.use('/books', bookRouter) //localhost:3000/books

module.exports = router