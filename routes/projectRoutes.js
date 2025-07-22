const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Public - Anyone can view
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// Admin only - Must be logged in + admin
router.post('/', verifyToken, isAdmin, controller.create);
router.put('/:id', verifyToken, isAdmin, controller.update);
router.delete('/:id', verifyToken, isAdmin, controller.deleteById);
router.delete('/', verifyToken, isAdmin, controller.deleteAll);

module.exports = router;
