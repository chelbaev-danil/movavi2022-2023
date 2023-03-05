const sqlite3 = require('sqlite3')

const db  = new sqlite3.Database('testik.db', (err) =>{
    err?console.log(err):console.log('its ok');
})


db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS customer ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
	    last_name TEXT NOT NULL,
	    email TEXT NOT NULL UNIQUE,
	    phone TEXT NOT NULL UNIQUE
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS couriers ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
	    last_name TEXT NOT NULL,
	    email TEXT NOT NULL UNIQUE,
	    phone TEXT NOT NULL UNIQUE
    )
    `)

    db.run(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        cost REAL NOT NULL,
        available INTEGER

    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_id INTEGER,
        date TEXT, 
        status INTEGER,
        FOREIGN KEY(customer_id) REFERENCES customer (id)
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS order_products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER,
        product_id INTEGER,
        count INTEGER,
        FOREIGN KEY(order_id) REFERENCES orders (id),
        FOREIGN KEY(product_id) REFERENCES products (id)
    )
    `)
    db.run(`
    CREATE TABLE IF NOT EXISTS courier_orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER,
        courier_id INTEGER,
        adress TEXT,
        payment_type INTEGER,
        status INTEGER,
        FOREIGN KEY(order_id) REFERENCES orders (id),
        FOREIGN KEY(courier_id) REFERENCES couriers (id)
    )
    `)
    
})


db.close()