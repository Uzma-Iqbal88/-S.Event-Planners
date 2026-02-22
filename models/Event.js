const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventType: { type: String, required: true },
    timeSlot: { type: String, required: true },
    events: { type: Number, required: true },
    date: { type: Date, required: true },
    guests: { type: Number, required: true },
    message: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } 
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
