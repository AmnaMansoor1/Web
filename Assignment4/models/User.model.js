const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

// Use mongoose.models to avoid model overwrite in development
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
