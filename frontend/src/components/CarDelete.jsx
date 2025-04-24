import React, { useState } from "react";
import { carsApiFetch } from "../utitlities/CarsApiFetch";

function CarsDelete() {
  // Declare state
  const [starter, setStarter] = useState(false);
  const [error, setError] = useState(null);

  const [deleteCarById, setDeleteCarById] = useState(-1);

  // async function to delete data from carsApi
  async function deleteCarData(deleteCarById) {
    try {
      let method = "DELETE";
      let data = {
        id: `${deleteCarById}`,
      };
      let response = carsApiFetch(`cars/${data}`, method, data);
      console.log(response);
    } catch (error) {
      setError("An error occured. Please try again later");
    }
  }
  if (starter === false) {
    return (
      <div>
        <h2>DELETE CAR BY ID</h2>

        <table>
          <tbody>
            <tr>
              <td>ID:</td>
              <td>
                <input
                  name="deleteCarById"
                  onChange={(e) => {
                    setDeleteCarById(e.target.value);
                  }}
                  type="number"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={() => {
            deleteCarData(deleteCarById);
            setStarter(true);
          }}
        >
          DELETE CAR
        </button>
      </div>
    );
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    // Display back to the user the ID of the car that was deleted
    return (
      <div>
        <h2>DELETED CAR:</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{deleteCarById}</td>
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
export default CarsDelete;
