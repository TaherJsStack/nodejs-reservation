const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Events = sequelize.define('events', {
  eventId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  eveFrom: Sequelize.DATE,
  eveTo: Sequelize.DATE,
  subject: Sequelize.STRING,
  notes: Sequelize.STRING,
  clientId: Sequelize.INTEGER,
  show: Sequelize.BOOLEAN,
  active: Sequelize.BOOLEAN,
  image: Sequelize.STRING,
  creator: Sequelize.INTEGER,
});

module.exports = Events;




// const db = require('../util/database');

// module.exports = class Events {
//   // SELECT `event_id`, `title`, `eve_from`, `eve_to`, `subject`, `notes`, `owner`, `show`, `active`, `image`, `creator`, `created_at` FROM `events` WHERE 1
//   constructor(id, title, eve_from, eve_to, subject, notes, owner, show, active, image, description, creator, created_at ) {
//     this.id = id;
//     this.title = title;
//     this.eve_from = eve_from;
//     this.eve_to = eve_to;
//     this.subject = subject;
//     this.notes = notes;
//     this.owner = owner;
//     this.show = show;
//     this.active = active;
//     this.image = image;
//     this.description = description;
//     this.creator = creator;
//     this.created_at = created_at;
//   }

//   save() {

//     return db.execute(
//       'INSERT INTO `events`(`title`, `eve_from`, `eve_to`, `subject`, `notes`, `owner`, `show`, `active`, `image`, `description`, `creator`, `created_at`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//       [ this.title, this.eve_from, this.eve_to, this.subject, this.notes, this.owner, this.show, this.active, this.image, this.description, this.creator, this.created_at]
//     );
//   }

//   static deleteById(id) {}

//   static fetchAll() {
//     return db.execute('SELECT * FROM events');
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM events WHERE events.event_id = ?', [id]);
//   }
// };
