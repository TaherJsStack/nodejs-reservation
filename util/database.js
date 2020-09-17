const Sequelize = require('sequelize');
const { post } = require('jquery');

// const sequelize = new Sequelize('sql12357834', 'sql12357834', '', {
//   dialect: 'mysql',
//   host: 'sql12.freemysqlhosting.net',
//   post: '3306'
// });

// module.exports = sequelize;

	


const sequelize = new Sequelize('travel', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;



// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: ''
// });



// module.exports = pool.promise();