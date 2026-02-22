# S.Event Planners - Booking System

A comprehensive web application for managing event planning services, bookings, and user reviews. Built with Node.js, Express, and MongoDB.

## 🌟 Features

- **User Authentication**: Secure signup and login system using bcrypt for password hashing.
- **Event Booking**: Users can book events by specifying type, date, guests, and custom messages.
- **Availability Check**: Real-time checking to prevent double-booking on the same date.
- **Reviews & Testimonials**: Users can share their experiences and rate the services.
- **Admin Dashboard**: Specialized access for administrators to view and manage all event bookings across the platform.
- **Responsive Design**: Modern UI with a sidebar navigation, image sliders, and interactive sections.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS (Embedded JavaScript templates), CSS3, Vanilla JavaScript, jQuery
- **Authentication**: express-session, bcryptjs
- **Middleware**: body-parser, method-override, dotenv

## 📂 Project Structure

- `app.js`: Main application entry point and middleware configuration.
- `models/`: Mongoose schemas for Users, Events, and Reviews.
- `routes/`: Express routers for authentication, page navigation, and event logic.
- `views/`: EJS templates for dynamic page rendering.
- `public/`: Static assets including CSS, client-side JS, images, and videos.

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB running locally or a remote MongoDB URI.

### Installation

1. Clone the repository or navigate to the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables in a `.env` file:
   ```env
   PORT=5558
   MONGODB_URI=mongodb://localhost:27017/booking_system
   ```

### Running the App

Start the server using:
```bash
npm start
```
The application will be available at `http://localhost:5558`.

## 🛡️ Administrative Access

The system identifies administrators based on specific email credentia. Administrators have access to additional features:
- View all bookings made by all users via the `/allevents` route.
- Delete bookings from the system.

## 📝 License

This project was developed as part of a Web Application Development course.
