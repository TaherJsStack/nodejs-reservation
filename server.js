const http = require("http");

const express    = require("express");
const mongoose   = require('mongoose');
const bodyParser = require("body-parser");
const path       = require('path');

const sequelize = require('./util/database');
const Accounts  = require('./models/accounts');
const Clients   = require('./models/clients');
const Events    = require('./models/events');
const Payment   = require('./models/payment');
const Rooms     = require('./models/rooms');

const frontendRouter = require('./router/frontend');
const backendRouter  = require('./router/backend');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join ( __dirname, '/images')));

app.use('/', express.static(path.join( __dirname, 'public')));

const db = require('./util/database');
const { post } = require("jquery");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// mongoose.connect("mongodb://localhost:27017/school", { useNewUrlParser: true })
//     .then( () => {
//       console.log("Connected To Database local scholl.......:::: DB");
//     })
//     .catch( () => {
//       console.log("Connection Failed...:::: DB");
//     });


app.use("/",  frontendRouter);
app.use("/backend",  backendRouter);


app.use( (req, res, next) => {
  res.render('404')
})

Accounts.hasOne(Clients, { constraints: true, foreignKey: 'accountId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Clients.belongsTo(Accounts, {foreignKey: 'accountId'})

Clients.hasOne(Payment, { constraints: true, foreignKey: 'clientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Payment.belongsTo(Clients, {foreignKey: 'clientId'});

Clients.hasMany(Events, {foreignKey: 'clientId'})
Events.belongsTo(Clients, {constraints: true, foreignKey: 'clientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

Clients.hasMany(Rooms, {foreignKey: 'clientId'})
Rooms.belongsTo(Clients, {constraints: true, foreignKey: 'clientId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })



  sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return Accounts.findOne({ where: { accountId: 1 } });
    // return Accounts.;
    // console.log(result);
  })
  .then(user => {
    if (!user) {
      return Accounts.create({ uname: 'Taher', email: 'test@test.com', password: '123456', created_at: new Date() });
    }
    return user;
  })
  .then(user => {
    console.log('user =======>', user);
    // return user.createCart();
  })
  .then( () => {
    let port = 7000 
    app.listen(7000);
    console.log("\n \n magic happens on port ", port)
  })
  .catch(err => {
    console.log(err);
  });



  // Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
  // User.hasMany(Product);
  // User.hasOne(Cart);
  // Cart.belongsTo(User);
  // Cart.belongsToMany(Product, { through: CartItem });
  // Product.belongsToMany(Cart, { through: CartItem });
  // Order.belongsTo(User);
  // User.hasMany(Order);
  // Order.belongsToMany(Product, { through: OrderItem });