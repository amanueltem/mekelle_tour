import Axum from "./Axum";
import Alamata from "./Almata";
import Gheralta from "./Gheralta.js";
import "./places.css";
import Mary_Zion from "./Mary_Zion.js";
import Debre_Damo from "./Debre_Damo.js";
import Negash from "./Negash.js";
import { Link } from "react-router-dom";
export default function Places() {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/places">
          <button>Places</button>
        </Link>
        <Link to="/map">
          <button>map</button>
        </Link>
        <Link to="/buy-tour-package">
          <button>Buy Tour Package</button>
        </Link>
        <Link to="/book-now">
          <button>Book Now</button>
        </Link>
        <Link to="/Contact">
          <button>Contact us</button>
        </Link>
      </nav>
      <p className="guide">
        <h1>These are our Historical and Muziem places </h1>
      </p>
      <div className="card-container">
        <Axum />
        <Alamata />
        <Gheralta />
        <Mary_Zion />
        <Debre_Damo />
        <Negash />
      </div>
    </div>
  );
}
