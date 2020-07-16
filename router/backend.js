const express    = require("express");
const backendRouter = express.Router();
const rootDir       = require('../util/path');
const path = require('path');

backendRouter.get('/', (req, res, next) => {
  res.render('backend/login', {
    pageTitle: 'login',
    path: '/'
  });
})

backendRouter.get('/register', (req, res, next) => {
  res.render('backend/register', {
    pageTitle: 'register',
    path: 'backend/register'
  });
})

backendRouter.get('/dashboard', (req, res, next) => {
  res.render('backend/index', {
    pageTitle: 'dashboard',
    path: 'backend/index'
  })
})


backendRouter.get('/reservations', (req, res, next) => {
  res.render('backend/reservations', {
    pageTitle: 'reservations',
    path: 'backend/reservations'
  })
})

backendRouter.get('/reservations-form', (req, res, next) => {
  res.render('backend/reservations-form', {
    pageTitle: 'reservations form',
    path: 'backend/reservations-form'
  })
})



module.exports = backendRouter; 