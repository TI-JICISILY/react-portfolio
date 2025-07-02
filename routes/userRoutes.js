const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.post('/', controller.register);
router.post('/login', controller.login);
router.get('/', auth, controller.getAll);
router.get('/:id', auth, controller.getById);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.deleteById);
router.delete('/', auth, controller.deleteAll);

module.exports = router;