const express = require("express")
const Router = express.Router()

let gifts = {
    'list': [
        {
            'name': 'Сладкий подарок',
            'cost': "500-5000р",
            'desc': "Набор сладостей"
        },
        {
            'name': 'Плов',
            'cost': "500-10000",
            'desc': "Гениальное узбекское блюдо"
        }
    ]
}
Router.get("/", (req, res) => {
    res.send("OK!")
})
Router.get('/gift', (req, res) => {
    res.json(gifts)
})



module.exports = Router