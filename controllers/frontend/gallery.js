
exports.gallery = (req, res, next) => {
  res.render('frontend/gallery', {
    pageTitle: 'gallery page',
    path: 'frontend/gallery'
  });
}