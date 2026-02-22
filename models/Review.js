const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    eventType: { type: String, required: true },
    staffResponsiveness: { type: String, required: true },
    cateringComments: { type: String },
    decorationQuality: { type: String, required: true },
    foodQuality: { type: String, required: true },
    rating: { type: Number, required: true },
    message: { type: String },
});

const Review = mongoose.model('Review', reviewSchema);
module.exports=Review;