var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '192.168.1.183',
    user: 'root',
    password: '123456a',
    database:'nodejs',
    port: 3306
});
conn.connect();
conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
conn.end();