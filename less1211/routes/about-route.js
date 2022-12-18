const express = require("express")
const Router = express.Router()
var path = require('path');

Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'about.html'))
})

module.exports = Router