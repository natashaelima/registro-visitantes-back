const mysql = require('mysql2/promise');

const execute = async (sql) => {
    const config = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'museu_db',
        port: 3307
    });

    let [results] = await config.query(sql);

    return results; 
}

module.exports = {
    execute
}