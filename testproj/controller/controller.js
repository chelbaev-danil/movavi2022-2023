const model = require(`../models/model`)

function showTest(req, res){
    model.getquesions((err, quesions) =>{
        err?console.log(err):res.render('test', {quesions})
    })
}

module.exports = {
    showTest
}