const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

const auth = jwt({

    secret: process.env.JWT_SECRET,
  
    userProperty: "payload",
  
    algorithms: ["HS256"],
  
  });

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(tripsController.tripsUpdateTrip)
    .delete(tripsController.tripsDeleteTrip);

router
    .route('/login')
    .post(authController.login);


router
    .route('/register')
    .post(authController.register);
    




module.exports = router;