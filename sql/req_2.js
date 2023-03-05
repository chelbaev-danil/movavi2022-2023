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

db.close()