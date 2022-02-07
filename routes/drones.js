const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
    Drone.find()
        .then((allDrones) => {
            res.render("drones/list", { drones: allDrones });
        })
        .catch((err) => {
            console.log("Something went wrong", err);
        });
});

router.get("/drones/create", (req, res, next) => {
    res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
    // Iteration #3: Add a new drone
    Drone.create({
        name: req.body.name,
        propellers: req.body.propellers,
        maxSpeed: req.body.maxSpeed,
    }).then((results) => {
        console.log("drone was added: ", results);
        res.redirect("/drones");
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    Drone.findById(req.params.id)
    .then((foundDrone) => {
      console.log("found drone!", foundDrone)
      res.render('drones/update-form', {
        name: foundDrone.name,
        propellers: foundDrone.propellers,
        maxSpeed: foundDrone.maxSpeed,
        _id: foundDrone._id
      })
    })
    .catch(err => console.log("something went wrong!", err))
  });
  
  router.post('/drones/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    Drone.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
    })
    .then(updatedDrone => {
      res.redirect('/drones')
      console.log("Drone updated successfully!", updatedDrone)
    })
    .catch(err => {
      console.log("something went wrong updating the drone!", err)
      res.render('drones/update-form')
    })
  
  });

router.post("/drones/:id/delete", (req, res, next) => {
    // Iteration #5: Delete the drone
    // ... your code here
});

module.exports = router;