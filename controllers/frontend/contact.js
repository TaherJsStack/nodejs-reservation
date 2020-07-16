
exports.contact = (req, res, next) => {
  res.render('frontend/contact', {
    pageTitle: 'contact page',
    path: 'frontend/contact'
  });
}