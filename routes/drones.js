const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((allDrones)=>{
    res.render("drones/list",{drones: allDrones})
  })
  .catch(err=>{
    console.log("Something went wrong", err)
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
