import React, { useState } from "react";
import { carsApiFetch } from "../utitlities/CarsApiFetch";

// function to add cars to the system
function CarsAdd() {
  // Declare state
  const [started, setStarter] = useState(false);
  const [error, setError] = useState(null);

  const [addMake, setAddMake] = useState("");
  const [addModel, setAddModel] = useState("");
  const [addSeats, setAddSeats] = useState("");
  const [addImg, setAddImg] = useState("");

  // async function to add/POST data to carsApi
  async function addCarData(addMake, addModel, addSeats, addImg) {
    try {
      let method = "POST";
      let data = {
        make: `${addMake}`,
        model: `${addModel}`,
        seats: `${addSeats}`,
        img: `${addImg}`,
      };
      let response = carsApiFetch(`cars/`, method, data);
      console.log(response);
      // setAddCar(response);
    } catch (error) {
      setError("An error occured. Please try again");
    }
  }
  // If started is false, display input fields
  if (started === false) {
    return (
      <div>
        <h2>ADD CAR TO SYSTEM</h2>
        <table>
          <tbody>
            <tr>
              <td>MAKE:</td>
              <td>
                <input
                  name="make"
                  type="text"
                  onChange={(e) => {
                    setAddMake(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>MODEL:</td>
              <td>
                <input
                  name="model"
                  type="text"
                  onChange={(e) => {
                    setAddModel(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>SEATS:</td>
              <td>
                <input
                  name="seats"
                  type="number"
                  onChange={(e) => {
                    setAddSeats(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>IMAGE LINK ON INTERNET:</td>
              <td>
                <input
                  name="seats"
                  type="text"
                  onChange={(e) => {
                    setAddImg(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => {
            addCarData(addMake, addModel, addSeats, addImg);
            setStarter(true);
          }}
        >
          ADD CAR
        </button>
      </div>
    );
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    // Return result of Car that was added successfully
    return (
      <div>
        <h2>CAR SUCCESSFULLY ADDED:</h2>
        <table>
          <thead>
            <tr>
              <th>MAKE</th>
              <th>MODEL</th>
              <th>SEATS</th>
              <th>IMAGE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{addMake}</td>
              <td>{addModel}</td>
              <td>{addSeats}</td>
              <td>
                <img src={addImg} alt="car"></img>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => {
            setStarter(false);
          }}
        >
          CLOSE INFORMATION
        </button>
      </div>
    );
  }
}
export default CarsAdd;
