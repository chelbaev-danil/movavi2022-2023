const express = require("express")
const Router = express.Router()

Router.get('/', (req, res) => {
    res.render('blog.hbs')
})

Router.get("/:name", (req, res) =>{
    let name = req.params.name
    res.render('blog.hbs', {
        name: name,
        articles: [
        {   
            title: "Records number 1",
            text: "dadad"
        }
        ]
    })
})

module.exports = Router 