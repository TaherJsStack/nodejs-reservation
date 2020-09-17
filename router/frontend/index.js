const express  = require("express");
const rootDir  = require('../../util/path');
const path     = require('path');

const indexRouter = express.Router();

const blogCotl =  require('../../controllers/frontend/blog');
const indexCotl =  require('../../controllers/frontend/index');
const eventsCotl =  require('../../controllers/frontend/events');
const reservCotl =  require('../../controllers/frontend/reserv');
const contactCotl =  require('../../controllers/frontend/contact');
const galleryCotl =  require('../../controllers/frontend/gallery');



indexRouter.post('/reserv', reservCotl.addAccoun)
indexRouter.post('/events', eventsCotl.addEvent)



indexRouter.get('/', indexCotl.index)
indexRouter.get('/blog', blogCotl.blog)
indexRouter.get('/events', eventsCotl.events)
indexRouter.get('/event-details/:eventId', eventsCotl.eventDetails)
indexRouter.get('/reserv', reservCotl.reserv)
indexRouter.get('/contact', contactCotl.contact)
indexRouter.get('/gallery', galleryCotl.gallery)

module.exports = indexRouter;