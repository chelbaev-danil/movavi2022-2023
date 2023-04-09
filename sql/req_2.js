const sqlite = require("sqlite3")

const db = new sqlite.Database('shop.db', (err) => {
    err?console.log(err):console.log('oki doki');
})

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS shop (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Adress TEXT NOT NULL UNIQUE
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS product (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT NOT NULL UNIQUE
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS product_in_shop(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        shop_id INTEGER NOT NULL,
        prod_id INTEGER NOT NULL,
        Demand INTEGER NOT NULL,
        count INTEGER NOT NULL,
        price_shop INTEGER NOT NULL,
        FOREIGN KEY(shop_id) REFERENCES shop (id),
        FOREIGN KEY(prod_id) REFERENCES product (id)
    )
    `)
})
//first task
let sql = `SELECT Adress FROM shop WHERE (SELECT price_shop FROM product_in_shop)>=(SELECT AVG(price_shop) FROM product_in_shop) `

// db.all(sql, [], (err, rows) => {
//     err?console.log(err):''
//     rows.forEach((row) => {
//         console.log(row.Adress);
//     });
// });
//seckond task
let sql2 = 'SELECT shop_id, price_shop, Demand FROM product_in_shop '
db.all(sql2, [], (err, rows) => {
    err?console.log(err):''

    console.log("First output:")
    rows.forEach((row) =>{
        console.log(row.shop_id, row.price_shop, row.Demand);
    })

    console.log('Second output:')
    rows.forEach((row) => {
        if (row.Demand > 70 ){
            console.log(row.shop_id, row.price_shop*1.2);
        }
        else if (row.Demand > 50 && row.Demand < 70 ){
            console.log(row.shop_id, row.price_shop*1.15);
        }else if (row.Demand < 50 ){
            console.log(row.shop_id, row.price_shop*1.05);
        }
    });
});
db.close()