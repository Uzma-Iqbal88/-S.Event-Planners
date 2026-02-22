const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/login', (req, res) => {
    res.render('login', { error: null });
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await user.comparePassword(password)) {
            req.session.user = user; 
            res.redirect('/'); 
        } else {
            res.render('login', { error: 'Invalid email or password' });
        }
    } catch (err) {
        console.error(err);
        res.render('login', { error: 'An error occurred. Please try again.' });
    }
});


router.get('/signup', (req, res) => {
    res.render('register', { error: null }); 
});

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body; 
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render('signup', { error: 'Email already exists' }); 
        }

        const user = new User({ username, email, password });

        await user.save();
        res.redirect('/auth/login');
    } catch (err) {
        console.error(err);
        res.render('signup', { error: 'An error occurred. Please try again.' });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.redirect('/');
        }
        res.clearCookie('connect.sid'); 
        res.redirect('/login');
    });
});

module.exports = router;