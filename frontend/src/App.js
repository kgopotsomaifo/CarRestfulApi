// import logo from "./logo.svg";
import car_logo from "./images/car_logo.jpg";
import "./App.css";
import DisplayCars from "./components/CarsDisplay";
import CarsAdd from "./components/CarsAdd";
import CarDelete from "./components/CarDelete";
import CarsEdit from "./components/CarsEdit";

function App() {
  return (
    <div className="App">
      <h1>
        <span>WELCOME TO CAR STORAGE</span>
        <span>
          <img src={car_logo} alt="logo" id="logo"></img>
        </span>
        <hr></hr>
      </h1>
      <DisplayCars />
      <hr></hr>
      <CarsAdd />
      <hr></hr>
      <CarDelete />
      <hr></hr>
      <CarsEdit />
    </div>
  );
}

export default App;
