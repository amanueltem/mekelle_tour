import Axum from "./Axum";
import Alamata from "./Almata";
import Gheralta from "./Gheralta.js";
import "./places.css";
import Mary_Zion from "./Mary_Zion.js";
import Debre_Damo from "./Debre_Damo.js";
import Negash from "./Negash.js";
import { NavLink } from "react-router-dom";
export default function Places() {
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
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
