const fs = require("fs");

// utility function - Gets car data, and creates the file if it doesn't exist
function getCars() {
  try {
    const content = fs.readFileSync("cars.json");
    return JSON.parse(content);
  } catch (e) {
    // file non-existent
    fs.writeFileSync("cars.json", "[]");
    return [];
  }
}

// Add a car and overwrite the json file
function addCar(carSpecs) {
  const cars = getCars();
  cars.push(carSpecs);
  fs.writeFileSync("cars.json", JSON.stringify(cars));
}

// Delete a car based on the index and overwrite the json file
function deleteCar(carIndex) {
  const cars = getCars();
  cars.splice(carIndex, 1);
  fs.writeFileSync("cars.json", JSON.stringify(cars));
}

// Update a car based on the index and over write the json file
function updateCar(carIndex, carSpecs) {
  const cars = getCars();
  // At Index position, replace 1 element with another elements:
  cars.splice(carIndex, 1, carSpecs);
  fs.writeFileSync("cars.json", JSON.stringify(cars));
}

// Export functions
module.exports = {
  getCars,
  addCar,
  deleteCar,
  updateCar,
};
