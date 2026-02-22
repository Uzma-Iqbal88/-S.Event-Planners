const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        res.redirect('/auth/login');
    }
}

router.post('/submit-form', isAuthenticated, async (req, res) => {
    try {
        const { eventType, timeSlot, events, date, guests, message } = req.body;
        const userId = req.session.user._id; 

        const newEvent = new Event({
            eventType,
            timeSlot,
            events,
            date: new Date(date), // Ensure date is initialized as a Date object
            guests,
            message,
            userId
        });

        await newEvent.save();
        console.log('Event saved successfully:', newEvent);
        res.redirect('/');
    } catch (error) {
        console.error('Error saving event:', error);
        res.status(500).send('Error saving event');
    }
});
 
router.get('/events', isAuthenticated, async (req, res) => {
    try {
        const events = await Event.find({ userId: req.session.user._id });
        res.render('events', { events }); 
    } catch (error) {
        res.status(500).send('Error fetching events');
    }
});


router.get('/events/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).send('Event not found');
        }
        res.status(200).send(event);
    } catch (error) {
        res.status(500).send('Error fetching event');
    }
});

router.get('/events/:id/edit', isAuthenticated, async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);

        if (!event || event.userId.toString() !== req.session.user._id) {
            return res.status(404).send('Event not found or you do not have permission to edit this event');
        }

        res.render('edit-event', { event });
    } catch (error) {
        res.status(500).send('Error fetching event for editing');
    }
});

router.put('/events/:id', isAuthenticated, async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!event) {
            return res.status(404).send('Event not found');
        }
        res.redirect('/events');
    } catch (error) {
        res.status(400).send('Invalid request');
    }
});

router.get('/allevents', isAuthenticated, async (req, res) => {
    try {
        const events = await Event.find().sort({ date: -1 }).populate('userId', 'username'); 
        res.render('allevents', { events, user: req.session.user }); 
    } catch (error) {
        res.status(500).send('Error fetching events');
    }
});
router.get('/check-date', async (req, res) => {
    const { date } = req.query;

    try {
        // Find events with the specified date
        const events = await Event.find({ date });
        const isBooked = events.length > 0;
        res.json({ booked: isBooked });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/events/:id', isAuthenticated, async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).send('Event not found');
        }
        res.redirect('/allevents');
    } catch (error) {
        res.status(500).send('Error deleting event');
    }
});

module.exports = router;