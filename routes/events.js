const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events');

router.get('/', eventsCtrl.index);
router.get('/new', eventsCtrl.newEvent);
router.get('/:id', eventsCtrl.show);
router.post('/', eventsCtrl.create);
router.get('/:id/edit', eventsCtrl.edit);
router.put('/:id', eventsCtrl.update, eventsCtrl.show);
router.delete('/:id', eventsCtrl.deleteOne);

module.exports = router;