exports.blog = (req, res, next) => {
  res.render('frontend/blog', {
    pageTitle: 'blog page',
    path: '/blog'
  });
}