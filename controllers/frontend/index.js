const { models } = require("mongoose");


exports.index = (req, res, next) => {
    res.render('frontend/index', {
      pageTitle: 'home page',
      path: '/'
    });
  }