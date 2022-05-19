// required dependencies
const express = require('express');
const budget = require('../models/budget')

// initialize the epxress application
const app = express();

// configure application settings
const port = 3000;

// mount our middleware
app.use(express.static('../public'))

// Index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {'budget': budget})
    console.log(budget)
});

// New.
app.get('/budgets/new', (req, res) => {
    res.send('new.ejs')
})
// D.
// U.
// Create.
app.post('/budgets', (req, res) => {

})
// E.
// Show.
app.get('/budgets/:index', (req, res) => {
    res.send('show.ejs')
})
// this tells node to listen for requests is running on: localhost:3000
app.listen(port, () => {
    console.log('listening on port', port)
});