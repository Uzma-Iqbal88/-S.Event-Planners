// Ensure file uploads are handled (if using multer for example)
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/reviews', upload.array('photos'), async (req, res) => {
    const { name, email, eventType, staffResponsiveness, cateringComments, decorationQuality, foodQuality, rating, message } = req.body;
    
    const photos = req.files.map(file => file.path); // Adjust based on how you handle file storage

    console.log('Received Review Form Submission: ${name} - ${email} - ${eventType} - ${staffResponsiveness} - ${cateringComments} - ${decorationQuality} - ${foodQuality} - ${photos} - ${rating} - ${message}');
    
    try {
        const newReview = new Review({ name, email, eventType, staffResponsiveness, cateringComments, decorationQuality, foodQuality, photos, rating, message });
        console.log('Review instance created:', newReview);

        await newReview.save(); // Save the review data to the database
        console.log('Review saved successfully');
        res.send('Review submitted successfully and saved to the database!');
    } catch (err) {
        console.error('Error saving review:', err);
        res.status(500).json({ error: 'An error occurred while saving the review.'});
}
});
