const express = require('express');
const router = express.Router();
const controller = require('../controllers/contactController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Public - anyone can view
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// Admin-only - must be signed in and have admin role
router.post('/', verifyToken, isAdmin, controller.create);
router.put('/:id', verifyToken, isAdmin, controller.update);
router.delete('/:id', verifyToken, isAdmin, controller.deleteById);
router.delete('/', verifyToken, isAdmin, controller.deleteAll);

module.exports = router;
