const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllers');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

    //Get Request
router.get('/home', controller.index);
router.get('/equipment', controller.equipment);
router.get('/equipment/category', controller.category);
router.get('/equipment/item', controller.item);
router.get('/users', controller.users);
router.get('/users/login', controller.login);
router.get('/users/register', controller.register)
router.get('/users/operators', controller.operators);


    //POST Request
router.post('/equipment', controller.createEquipment);
router.post('/users/register', controller.registerUsers)



module.exports = router;
