import React, { useState } from "react";
import { getCarsFromApi } from "../utitlities/CarsApi";

// fetch and display all data from API
function DisplayCars() {
  // Declare state
  const [started, setStarter] = useState(false);
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  // async function to display data from carsApi
  async function fetchCarData() {
    try {
      let response = await getCarsFromApi(`/api`);
      // console.log(response);
      setCars(response);
    } catch (error) {
      setError("An error occured. Please try again later");
    }
  }
  // If not started yet, return button to start search
  if (started === false) {
    return (
      <div>
        <h2>DISPLAY ALL THE CARS:</h2>
        <button
          onClick={() => {
            fetchCarData();
            setStarter(true);
          }}
        >
          SEARCH ALL CARS
        </button>
      </div>
    );
  } else {
    // Show all Cars on the system
    return (
      <div>
        <span>{error && <p>Error: {error}</p>}</span>
        <h2>DISPLAY ALL THE CARS:</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>MAKE</th>
              <th>MODEL</th>
              <th>SEATS</th>
              <th>IMAGE</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.make}</td>
                  <td>{element.model}</td>
                  <td>{element.seats}</td>
                  <td>
                    <img src={element.img} alt="car"></img>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          onClick={() => {
            setStarter(false);
          }}
        >
          CLOSE SEARCH
        </button>
      </div>
    );
  }
}
export default DisplayCars;
