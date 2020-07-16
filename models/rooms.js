const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Rooms = sequelize.define('rooms', {
  roomId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  reservFrom: Sequelize.DATE,
  reservTo: Sequelize.DATE,
  bed: Sequelize.INTEGER,
  level: Sequelize.INTEGER,
  roomNo: Sequelize.INTEGER,
  notes: Sequelize.STRING,
  clientId: Sequelize.INTEGER,
  creator: Sequelize.INTEGER,
});

module.exports = Rooms;





// // const db = require('../util/database');


// module.exports = class Rooms {
  
//   constructor(id, client_id, reserv_from, reserv_to, bed, level, room_no, notes, creator, created_at) {
//     this.id = id;
//     this.client_id = client_id;
//     this.reserv_from = reserv_from;
//     this.reserv_to = reserv_to;
//     this.bed = bed;
//     this.level = level;
//     this.room_no = room_no;
//     this.notes = notes;
//     this.creator = creator;
//     this.created_at = created_at;
//   }

//   // save() {
//   //   return db.execute(
//   //     'INSERT INTO rooms (name, email, phone, address, birthday, account_id, creator, created_at ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
//   //     [this.client_id, this.reserv_from, this.reserv_to, this.bed, this.level, this.room_no, this.notes, this.creator, this.created_at]
//   //   );
//   // }

//   // static deleteById(id) {}

//   // static fetchAll() {
//   //   return db.execute('SELECT * FROM rooms');
//   // }

//   // static findById(id) {
//   //   return db.execute('SELECT * FROM rooms WHERE rooms.room_id = ?', [id]);
//   // }
// };
