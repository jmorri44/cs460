const express = require('express');
const router = express.Router();
const controller= require('../controllers/travel');


/* GET the home page. */
router.get('/', controller.travel);
module.exports = router;