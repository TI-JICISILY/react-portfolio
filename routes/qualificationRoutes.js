const express = require('express');
const router = express.Router();
const controller = require('../controllers/qualificationController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Public routes
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

// Admin-only routes
router.post('/', verifyToken, isAdmin, controller.create);
router.put('/:id', verifyToken, isAdmin, controller.update);
router.delete('/:id', verifyToken, isAdmin, controller.deleteById);
router.delete('/', verifyToken, isAdmin, controller.deleteAll);

module.exports = router;
