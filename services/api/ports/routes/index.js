const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllers');

router.get('/home', controller.index);
router.get('/equipment', controller.equipment);
router.get('/equipment/category', controller.category);
router.get('/equipment/item', controller.item);
router.get('/users', controller.users);
router.get('/users/profile', controller.profile);

module.exports = router;
