const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { user: req.session.user });
});

router.get('/review', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/review.html'));
});

router.get('/catering', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/catering.html'));
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/gallery.html'));
});

router.get('/form', (req, res) => {
  res.render('form'); 
});

router.get('/reviewform', (req, res) => {
  res.render('reviewform');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
