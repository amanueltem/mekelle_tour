import React, { useState } from "react";
import mary_Zion from "./place_images/Mary_Zion.jpg";
const Mary_Zion = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Church of Our Lady Mary of Zion</h1>
        <p>
          Mary_Zion (Tigrinya: Mary_Zion) The Church of Our Lady, Mary of
          Zion[a] is an Ethiopian Orthodox Tewahedo Church which is claimed to
          contain the Ark of the Covenant. The church is located in the town of
          Axum, Tigray Region in northern Ethiopia, near the grounds of Obelisks
          of Axum.
        </p>
        <img src={mary_Zion} alt="obelisk" />
      </div>
      <div className="card-body">
        {showDetails ? (
          <div>
            <p>
              The original church is believed to have been built during the
              reign of Ezana the first Christian ruler of the Kingdom of Axum
              (Present-day Eritrea and Ethiopia), during the 4th century AD, and
              has been rebuilt several times since then. Women are not permitted
              entry into the “Old Church”; the Blessed Virgin Mary, representing
              the archetype of the Ark, is the only woman allowed within its
              premises.
            </p>

            <p>
              The church of Saint Mary of Zion was the traditional place where
              Ethiopian Emperors came to be crowned. Which indeed meant if an
              Emperor was not crowned at Axum, or did not at least have his
              coronation ratified by a special service at St. Mary of Zion, he
              could not be referred to by the title of "Atse".[4][5][6] The
              church is a significant center of pilgrimage for the Ethiopian
              Orthodox Tewahedo Church, especially during the “Festival of Zion
              Mariam” on 30 November (21 Hidar on the Ethiopian calendar).
            </p>
          </div>
        ) : (
          <div></div>
        )}
        <button onClick={toggleDetails}>
          {showDetails ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Mary_Zion;
