const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Payment = sequelize.define('payment', {
  payId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  payType: Sequelize.STRING,
  cardHeaderName: Sequelize.STRING,
  cardNo: Sequelize.STRING,
  expiryMonth: Sequelize.STRING,
  expiryYear: Sequelize.STRING,
  cvc: Sequelize.INTEGER,
  clientId: Sequelize.INTEGER,
  creator: Sequelize.INTEGER,

});

module.exports = Payment;





// // const db = require('../util/database');


// module.exports = class Payment {
  
//   constructor(pay_id, client_id, pay_type, card_header_name, card_no, expiry_month, expiry_year, cvc, creator, created_at) {
//     this.id = pay_id;
//     this.client_id = client_id;
//     this.pay_type = pay_type;
//     this.card_header_name = card_header_name;
//     this.card_no = card_no;
//     this.expiry_month = expiry_month;
//     this.expiry_year = expiry_year;
//     this.cvc = cvc;
//     this.creator = creator;
//     this.created_at = created_at;
//   }

//   // save() {
//   //   return db.execute(
//   //     'INSERT INTO payment ( client_id, pay_type, card_header_name, card_no, expiry_month, expiry_year, cvc, creator, created_at ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//   //     [this.client_id, this.pay_type, this.card_header_name, this.card_no, this.expiry_month, this.expiry_year, this.cvc, this.creator, this.created_at]
//   //   );
//   // }

//   // static deleteById(id) {}

//   // static fetchAll() {
//   //   return db.execute('SELECT * FROM payment');
//   // }

//   // static findById(id) {
//   //   return db.execute('SELECT * FROM payment WHERE payment.pay_id = ?', [id]);
//   // }
// };
