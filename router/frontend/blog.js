const express  = require("express");
const blogRouter = express.Router();

const blogCotl =  require('../../controllers/frontend/blog');


blogRouter.get('/', blogCotl.blog)

module.exports = blogRouter;