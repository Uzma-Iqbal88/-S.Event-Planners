const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { connectToDB } = require('./database'); 
const session = require('express-session');
const methodOverride = require('method-override');
const authRoutes = require('./routes/auth');
const Event = require('./models/Event');

dotenv.config();

const app = express();
const port = process.env.PORT || 5557;

// Connect to MongoDB
connectToDB();

// Middleware to parse URL-encoded and JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Method Override middleware
app.use(methodOverride('_method'));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure: true if using HTTPS
}));

// Use authentication routes
app.use('/auth', authRoutes);

// Import and use other routes
const pagesRoute = require('./routes/pages'); // Assuming you have separate routes for other pages
const eventsRoute = require('./routes/events'); // Import the modified events route
app.use('/', pagesRoute); // Use pagesRoute for other pages if needed
app.use('/', eventsRoute); // Use eventsRoute for events related routes

// Handle form submission
app.post('/submit-form', async (req, res) => {
    const { name, email, eventType, timeSlot, events, date, guests, message } = req.body;

    const newEvent = new Event({
        name,
        email,
        eventType,
        timeSlot,
        events,
        date,
        guests,
        message
    });

    try {
        await newEvent.save();
        console.log(`Received form submission: ${name} - ${email} - ${eventType} - ${timeSlot} - ${events} - ${date} - ${guests} - ${message}`);
        res.send('Form submitted successfully!');
    } catch (error) {
        console.error('Error saving event:', error);
        res.status(500).send('Internal server error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});