import React, { useState } from "react";
import negash from "./place_images/negash.jpg";
const Negash = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Debre Damo</h1>
        <p>
          Negash is considered to be the earliest Muslim settlement in Africa; a
          cemetery from the 7th century CE has been excavated inside the village
          boundaries.[1] The Futuh al-Habasha records Ahmad ibn Ibrahim al-Ghazi
          visited the tomb of Ashama ibn Abjar in Negash during his invasion of
          the province of Tigray (around 1537).[2] Negash is also known for
          having
        </p>
        <img src={negash} alt="obelisk" />
      </div>
      <div className="card-body">
        {showDetails ? (
          <div>
            <p>
              one of Africa's oldest mosques,[3] that is the Al Nejashi Mosque.
              sorry ! We are going to add detalis latar.
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

export default Negash;
