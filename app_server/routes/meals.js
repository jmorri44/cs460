const express = require('express');
const router = express.Router();
const controller= require('../controllers/meals');


/* GET the home page. */
router.get('/', controller.meals);
module.exports = router;