const Events = require('../../models/events');

exports.addEvent = (req, res, next) => {

  console.log('addEvent =>', req.body)

  const title = req.body.title;
  const eve_from = req.body.eve_from;
  const eve_to = req.body.eve_to;
  const subject = req.body.subject;
  const notes = req.body.notes;
  const owner = 1;
  const show = true;
  const active = true;
  const image = 'req.body.image';
  const creator = 1;
  const description = req.body.description;
  const created_at = new Date();

  const c_event = new Events(null, title, eve_from, eve_to, subject, notes, owner, show, active, image, description, creator, created_at)

  c_event
  .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));

}

exports.events = (req, res, next) => {  
  // Events.fetchAll()
  //   .then(([rows, fieldData]) => {
  //     // console.log('fetchAll rows =>', rows)
  //     res.render('frontend/events', {
  //       pageTitle: 'events page',
  //       path: 'frontend/events',
  //       editing: false,
  //       events: rows, 
  //     });
  //   })
  //   .catch(err => console.log(err));
}


exports.eventDetails = (req, res, next) => {  
  const eventId = req.params.eventId;

  // console.log('eventId =>', eventId)
  // console.log('eventDetails =>',)

  Events.findById(eventId)
    .then(([event]) => {
      console.log('event-details event =>', event)
      res.render('frontend/event-details', {
        event: event[0],
        pageTitle: event[0].title,
        path: 'frontend/event-details',
      });
    })
    .catch(err => console.log(err));
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const Product = require('../models/product');   

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};



