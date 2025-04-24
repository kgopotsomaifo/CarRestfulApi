const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const carLogic = require("./cars");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// If Search criteria is wrong - Image to display

// Display all the Cars that is on the System
app.get("/api", (req, resp) => {
  const cars = carLogic.getCars();
  if (cars.length === 0) {
    resp.send("No Cars currently saved");
  } else {
    console.log(cars);
    resp.send(cars);
  }
});

// Post Request to add item to list of cars
app.post("/cars", (req, resp) => {
  const carMake = req.body.make;
  const carModel = req.body.model;
  const carSeats = req.body.seats;
  const carImg = req.body.img;
  // Get the current array to determine ID
  const cars = carLogic.getCars();
  // Give the car a Unique ID
  let carId = cars.length + 1;
  // If the ID already exist +1 and test again until an open ID position is available
  let idExist = true;
  while (idExist === true) {
    idExist = false;
    for (i = 0; i < cars.length; i++) {
      if (carId == cars[i].id) {
        idExist = true;
      }
    }
    if (idExist === true) {
      carId++;
    }
  }
  // Construct the specifications
  const carSpecifications = {
    id: carId,
    make: carMake,
    model: carModel,
    seats: carSeats,
    img: carImg,
  };
  // Add to cars
  carLogic.addCar(carSpecifications);
  // Let the user know the car was successfully captured
  resp.status(201).json(carSpecifications);
});

// Delete request for car by ID
app.delete("/cars/:id", (req, resp) => {
  const carId = req.body.id;
  const cars = carLogic.getCars();
  // Find the index of the car to be deleted
  let carIndex = -1;
  for (i = 0; i < cars.length; i++) {
    if (cars[i].id == carId) {
      carIndex = i;
    }
  }
  // If index was found (Bigger than -1), delete the car otherwise let user know the ID does not exist
  if (carIndex > -1) {
    // Get the information of the car that will be deleted
    const deletedCar = cars[carIndex];
    // Delete the car based on Index
    carLogic.deleteCar(carIndex);
    // Let the user know the car was deleted
    resp.status(201).json(deletedCar);
  } else {
    // Let the user know the car was "NOT FOUND"
    resp.status(404).json(carId);
  }
});

// Put request to Update car by ID
app.put("/cars", (req, resp) => {
  const carId = parseInt(req.body.id);
  const carMake = req.body.make;
  const carModel = req.body.model;
  const carSeats = req.body.seats;
  const carImg = req.body.img;

  // Construct the specifications
  const carSpecifications = {
    id: carId,
    make: carMake,
    model: carModel,
    seats: carSeats,
    img: carImg,
  };

  // Get the current array to determine Index of the car to be updated
  const cars = carLogic.getCars();
  let carIndex = -1;
  for (i = 0; i < cars.length; i++) {
    if (cars[i].id == carId) {
      carIndex = i;
    }
  }
  // If index was found (Bigger than -1), update cars otherwise let user know the ID was not found
  if (carIndex > -1) {
    // Get the information of the car that will be Updated to Display to the user
    const updatedCar = cars[carIndex];
    // Update the car based on Index and use the new specifications
    carLogic.updateCar(carIndex, carSpecifications);
    // Let the user know the car was updated
    resp.status(201).json(updatedCar);
  } else {
    // If ID was not found - let user know Car ID was not found ***
    resp.status(404).json(carId);
    // resp.send(`The Car with ID: ${carId} was not found in the system`);
  }
});

app.listen(port, () => console.log("Listening engaged"));
