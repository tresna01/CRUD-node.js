const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa_db'
});

db.getConnection((err, connection) => {
    if (err) console.error('Database connection failed:', err.message);
    else {
        console.log('Connected to database.');
        connection.release();
    }
});

module.exports = db;
