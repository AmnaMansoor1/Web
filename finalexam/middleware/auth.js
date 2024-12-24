// middleware/auth.js
module.exports.isAuthenticated = (req, res, next) => {
    if (req.user) {
      // If the user is logged in, continue to the next middleware
      return next();
    }
    // If not logged in, respond with an error or redirect
    res.status(401).json({ error: 'Please log in to access this resource' });
  };
  