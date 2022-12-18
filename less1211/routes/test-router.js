const express = require("express")
const Router = express.Router()

Router.get('/:id', (req, res) => {
    var id = req.params.id;
    res.send(`Вы перешли на подстраницу ${id}`)
})

module.exports = Router