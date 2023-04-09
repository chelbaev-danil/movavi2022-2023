const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./questions.sqlite3', (err) =>{
    err?console.log(err.message):console.log('zbs');

})

let query = `
    CREATE TABLE IF NOT EXISTS questions(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        questions TEXT NOT NULL,
        correct TEXT NOT NULL,
        answer1 TEXT NOT NULL,
        answer2 TEXT NOT NULL,
        answer3 TEXT NOT NULL
    )
`
db.run(query, [], (err) =>{
    err?console.log(err.message):console.log('oke');
})

db.close()