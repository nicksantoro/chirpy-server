const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/content');

router.get('/', ctrl.getAllContent);

router.post('/', ctrl.createContent);

router.delete('/:userId', ctrl.deleteContent);

router.get('/:contentId', ctrl.getContentById);

router.put('/:id', ctrl.updateContentById)



module.exports = router;