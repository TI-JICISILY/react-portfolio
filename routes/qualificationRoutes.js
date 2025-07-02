const express = require('express');
const router = express.Router();
const controller = require('../controllers/qualificationController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteById);
router.delete('/', controller.deleteAll);

module.exports = router;