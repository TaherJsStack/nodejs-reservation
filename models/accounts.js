const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Accounts = sequelize.define('accounts', {
  accountId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  uname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,

});

module.exports = Accounts;








// const db = require('../util/database');

// module.exports = class Accounts {
  
//   constructor(id, user_name, email, password) {
//     this.id = id;
//     this.user_name = user_name;
//     this.email = email;
//     this.password = password;
//     this.created_at = new Date();
//   }

//   save() {
//     return db.execute(
//       'INSERT INTO accounts ( user_name, e_mail, password, created_at ) VALUES ( ?, ?, ?, ? )',
//       [ this.user_name, this.email, this.password, this.created_at]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute('SELECT * FROM accounts');
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM accounts WHERE accounts.account_id = ?', [id]);
//   }
// };
