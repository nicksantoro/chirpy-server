const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/users');

router.get('/', ctrl.getAllUsers);

router.post('/', ctrl.createUser);

router.delete('/:userId', ctrl.deleteUser);

router.get('/:contentId', ctrl.getUserById);

router.put('/:id', ctrl.updateUserById)



module.exports = router;