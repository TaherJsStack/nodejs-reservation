const Accounts = require('../../models/accounts');
const Clients  = require('../../models/clients');
const Events   = require('../../models/events');
const Rooms    = require('../../models/rooms');
const Payment  = require('../../models/payment');

var title;
var eveFrom;
var eveTo;
var subject;
var notes;
var description;
var birthday= new Date();

var reservFrom;
var reservTo;
var bed;
var level;
var roomNotes;
var roomDescription;

var holdername;
var cardNo;
var cvcPwd;
var expMonth;
var expYear;

var tab;

exports.addAccoun = (req, res, next) => {

  console.log('addClient =>', req.body)

  const uname     = req.body.uname;
  const email     = req.body.email;
  const password  = req.body.cpwd;

  const fname  = req.body.fname;
  const lname  = req.body.lname;
  const phno   = req.body.phno;
  const address= req.body.address;
  const phno_2 = req.body.phno_2;

   title   = req.body.title;
   eveFrom = req.body.eve_from;
   eveTo   = req.body.eve_to;
   subject = req.body.subject;
   notes   = req.body.notes;
   description= req.body.description;
   birthday= new Date();

   reservFrom= req.body.reserv_from;
   reservTo  = req.body.reserv_to;
   bed       = req.body.bed;
   level     = req.body.level;
   roomNotes = req.body.room_notes;
   roomNotes = req.body.room_notes;
   roomDescription= req.body.room_description;

   holdername= req.body.holdername;
   cardNo    = req.body.cardno;
   cvcPwd    = req.body.cvcpwd;
   expMonth  = req.body.expmonth;
   expYear   = req.body.expyear;
  // const = req.body.;

  tab = req.body.tab;
  // make_payment: 'Confirm'


  Accounts.create({
    uname:    uname,
    email:    email,
    password: password
  })
  .then( accountDone => {
      // console.log('accountDone =>', accountDone.dataValues.accountId)
      addClient(fname, lname, email, phno, address, birthday, accountDone.dataValues.accountId, 1 ) 
    })
    .catch(err => console.log(err));
}

function addClient(_fname, _lname, _email, _phone, _address, _birthday, _accountId, _creator ) {
  Clients.create({
    fname:      _fname,
    lname:      _lname,
    email:      _email,
    phone:      _phone,
    address:    _address,
    birthday:   _birthday,
    accountId:  _accountId,
    creator:    _creator,
  })
  .then( addClientDone => {
      console.log('addClientDone =>', addClientDone.dataValues)

      let clientId = addClientDone.dataValues.clientId;
      if (tab === 'event') {
        addEvent(title, eveFrom, eveTo, subject, notes, clientId, true, true, '_image', 1 )
      } else {
        addRoom(reservFrom, reservTo, bed, level, 1, roomNotes, clientId, 1 )        
      }
      addPayment('_payType', holdername, cardNo, expMonth, expYear, cvcPwd, clientId, 1)
    })
    .catch( err => {
      console.log('addClient err =>', err)
    })
}

function addEvent(_title, _eveFrom, _eveTo, _subject, _notes, _clientId, _show, _active, _image, _creator ){
  Events.create({
    title:   _title,
    eveFrom: _eveFrom,
    eveTo:   _eveTo,
    subject: _subject,
    notes:   _notes,
    clientId: _clientId,
    show:    _show,
    active:  _active,
    image:   _image,
    creator: _creator,
  })
  .then( addEventDone => {
    console.log('addEventDone =>', addEventDone.dataValues)
  })
  .catch( err => {
    console.log('addEventDone err =>', err)
  })

}

function addRoom(_reservFrom, _reservTo, _bed, _level, _roomNo, _notes, _clientId, _creator ) {
  Rooms.create({
    reservFrom: _reservFrom,
    reservTo:   _reservTo,
    bed:        _bed,
    level:      _level,
    roomNo:     _roomNo,
    notes:      _notes,
    clientId:   _clientId,
    creator:    _creator,
  })
  .then( addRoomDone => {
      console.log('addRoomDone =>', addRoomDone.dataValues)
    })
    .catch( err => {
      console.log('addRoomDone err =>', err)
    })
    
}

function addPayment(_payType, _cardHeaderName, _cardNo, _expiryMonth, _expiryYear, _cvc, _clientId, _creator) {
  Payment.create({
    payType:     _payType,
    cardHeaderName: _cardHeaderName,
    cardNo:      _cardNo,
    expiryMonth: _expiryMonth,
    expiryYear:  _expiryYear,
    cvc:         _cvc,
    clientId:    _clientId,
    creator:     _creator,
  })
  .then( addPaymentDone => {
      console.log('addPaymentDone =>', addPaymentDone.dataValues)
    })
    .catch( err => {
      console.log('addPaymentDone err =>', err)
    })
}


// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product(null, title, imageUrl, description, price);
//   product
//     .save()
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch(err => console.log(err));
// };


exports.reserv = (req, res, next) => {
  res.render('frontend/reserv', {
    pageTitle: 'reserv page',
    path: 'frontend/reserv',
    editing: false
  });
}