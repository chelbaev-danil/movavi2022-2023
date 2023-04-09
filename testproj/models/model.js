const sqlite3 = require('sqlite3').verbose()

function getquesions(callback){
    let db = new sqlite3.Database('./questions.sqlite3')

    let query = `SELECT * FROM questions`;

    db.all(query, (err, rows) =>{
        err?callback(err, null):callback(null, rows);
        db.close()
    })
}

module.exports = {
    getquesions
}