const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

// POST /api/auth/signin - User login
router.post('/signin', controller.signin);

// GET /api/auth/signout - Optional signout route (optional logic)
router.get('/signout', controller.signout || ((req, res) => {
  res.json({ message: 'Signed out (dummy route)' });
}));

module.exports = router;
