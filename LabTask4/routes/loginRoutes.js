// routes/loginRoutes.js
const express = require('express');
const router = express.Router();

// Dummy users for login (replace with real database query)
const users = [
  { email: 'user@example.com', password: 'password123', isAdmin: false },
  { email: 'admin@example.com', password: 'admin123', isAdmin: true },
];

// Route to display the login page
router.get('/login', (req, res) => {
  res.render('users/login', { title: 'Login' });
});

// Route to handle login form submission
router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Find user by email and password
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      // If user is found, store them in the session
      req.session.user = user;
      res.redirect('/dashboard');  // Redirect to dashboard after successful login
    } else {
      // If no user found, send error message
      res.send('Invalid email or password');
    }
  });
  // Route to display the signup page
router.get('/signup', (req, res) => {
    res.render('users/signup', { title: 'Sign Up' });
  });
  // Route to handle signup form submission
router.post('/signup', (req, res) => {
    const { email, password, confirmPassword } = req.body;
  
    // Validate that passwords match
    if (password !== confirmPassword) {
      return res.send('Passwords do not match');
    }
  
    // Check if the email already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.send('Email is already registered');
    }
  
    // Add the new user to the dummy users list (in a real application, save to database)
    users.push({ email, password, isAdmin: false });
  
    // Redirect to login page after successful signup
    res.redirect('/login');
  });

module.exports = router;
