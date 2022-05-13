const mysql2 = require("mysql2")
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

connection.connect((err) => {
    if (err) {
        throw err;
  }});

module.exports = sequelize;