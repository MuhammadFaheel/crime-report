const User = require('../model/user');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try{
        const savedUser = user.save();
        res.send(savedUser);
    } catch {
        err.status(404)
    }
});

module.exports = app;