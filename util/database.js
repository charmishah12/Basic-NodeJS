const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '13306',
    user: 'root',
    database: 'node-complete',
    password: 'Mtech@123'
});

module.exports = pool.promise();