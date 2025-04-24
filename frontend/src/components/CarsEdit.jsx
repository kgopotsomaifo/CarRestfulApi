import React, { useState } from "react";
import { carsApiFetch } from "../utitlities/CarsApiFetch";

function CarsEdit() {
  // Declare state
  const [started, setStarter] = useState(false);
  const [error, setError] = useState(null);

  const [amendId, setAmendId] = useState(-1);
  const [amendMake, setAmendMake] = useState("");
  const [amendModel, setAmendModel] = useState("");
  const [amendSeats, setAmendSeats] = useState("");
  const [amendImg, setAmendImg] = useState("");

  async function editCarData(
    amendId,
    amendMake,
    amendModel,
    amendSeats,
    amendImg
  ) {
    try {
      let method = "PUT";
      let data = {
        id: `${amendId}`,
        make: `${amendMake}`,
        model: `${amendModel}`,
        seats: `${amendSeats}`,
        img: `${amendImg}`,
      };
      let response = carsApiFetch(`cars/`, method, data);
      console.log(response);
    } catch (error) {
      setError("An error occured. Please try again");
    }
  }
  //If not started yet , show fields to complete and submit
  if (started === false) {
    return (
      <div>
        <h2>UPDATE CAR</h2>
        <table>
          <tbody>
            <tr>
              <td>ID:</td>
              <td>
                <input
                  name="id"
                  type="number"
                  onChange={(e) => {
                    setAmendId(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>MAKE:</td>
              <td>
                <input
                  name="make"
                  type="text"
                  onChange={(e) => {
                    setAmendMake(e.target.value);
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
                    setAmendModel(e.target.value);
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
                    setAmendSeats(e.target.value);
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
                    setAmendImg(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => {
            editCarData(amendId, amendMake, amendModel, amendSeats, amendImg);
            setStarter(true);
          }}
        >
          UPDATE CAR
        </button>
      </div>
    );
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    // Show results, information before and after update
    return (
      <div>
        <h2>UPDATED CAR:</h2>
        <h3 colSpan={5}>AMENDED TO</h3>
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
            <tr>
              <td>{amendId}</td>
              <td>{amendMake}</td>
              <td>{amendModel}</td>
              <td>{amendSeats}</td>
              <td>
                <img src={amendImg} alt="car"></img>
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
export default CarsEdit;
