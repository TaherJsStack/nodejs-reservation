const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Clients = sequelize.define('clients', {
  clientId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  fname: Sequelize.STRING,
  lname: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  address: Sequelize.STRING,
  birthday: Sequelize.DATE,
  accountId: Sequelize.INTEGER,
  creator: Sequelize.INTEGER,
});

module.exports = Clients;





// const db = require('../util/database');


// module.exports = class Clients {
  
//   constructor(id, name, email, phone, address, birthday, account_id, creator, created_at) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
//     this.address = address;
//     this.birthday = birthday;
//     this.account_id = account_id;
//     this.creator = creator;
//     this.created_at = created_at;
//   }

//   save() {
//     return db.execute(
//       'INSERT INTO clients (name, email, phone, address, birthday, account_id, creator, created_at ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
//       [this.name, this.email, this.phone, this.address, this.birthday, this.account_id, this.creator, this.created_at]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute('SELECT * FROM clients');
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM clients WHERE clients.client_id = ?', [id]);
//   }
// };
