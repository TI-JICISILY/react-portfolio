const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const auth = require('../middleware/authMiddleware'); // plural and correct path

router.post('/', controller.register);
router.post('/login', controller.login);
router.get('/', auth.verifyToken, controller.getAll);
router.get('/:id', auth.verifyToken, controller.getById);
router.put('/:id', auth.verifyToken, controller.update);
router.delete('/:id', auth.verifyToken, controller.deleteById);
router.delete('/', auth.verifyToken, controller.deleteAll);

module.exports = router;
