const mysql = require('mysql2');
const config = require('./config.json');

const sql = `SELECT * FROM heroes`;

// create the connection to database
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
});

connection.connect((err) => {
    if (err) return console.log(`Error ${err.message}`);
    else console.log('Connection to MySQL server successfully established');
});

connection.query(sql, (err, result) => {
    if (err) console.log(err);
    console.log(result);
});

connection.end((err) => {
    if (err) return console.log(`Error ${err.message}`);
    console.log('Connection closed');
});