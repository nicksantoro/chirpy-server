const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/tags');

router.get('/', ctrl.getAllTags);

router.post('/', ctrl.createTag);

router.delete('/:userId', ctrl.deleteTag);

router.get('/:tagId', ctrl.getTagById);

router.put('/:id', ctrl.updateTagById)



module.exports = router;