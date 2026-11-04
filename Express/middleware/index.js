const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const PORT = 5000;

//! Inbuilt Middleware
app.use(express.json());
app.use(express.static('public'));

//! External Middleware
app.use(cors());
// app.use(morgan('tiny'));

//! Custom Middleware
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.get('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: "Hello World"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})