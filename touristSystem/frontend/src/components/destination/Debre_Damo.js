import React, { useState } from "react";
import debre_Damo from "./place_images/debre_Damo.jpg";
const Debre_Damo = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Debre Damo</h1>
        <p>
          Debre Damo (Tigrinya: ደብረ ዳሞ), also spelled Debre Dammo, Dabra Dāmmo
          or Däbrä Dammo),[1] is the name of a flat-topped mountain, or amba,
          and a 6th-century monastery in Tigray Region of Ethiopia. The mountain
          is a steeply rising plateau of trapezoidal shape, about 1,000 by 400 m
          (3,300 by 1,300 ft) in dimension. It sits at an elevation of 2,216 m
          (7,270 ft) above sea level.
        </p>
        <img src={debre_Damo} alt="obelisk" />
      </div>
      <div className="card-body">
        {showDetails ? (
          <div>
            <p>
              It is north of Bizet, and north-west of Adigrat, in the
              Mehakelegnaw Zone of the Tigray Region, close to the border with
              Eritrea The mountain hosted a monastery, accessible only by rope
              up a sheer cliff, 15 m (49 ft) high, is known for its collection
              of manuscripts and for having the earliest existing church
              building in Ethiopia that is still in its original style, and only
              men can visit it. Tradition claims that the monastery was founded
              in the 6th century by Abuna Aregawi.
            </p>
            <p>
              The monastery received its first archeological examination by E.
              Litton, who led a German expedition to northern Ethiopia in the
              early 20th century. By the time that David Buxton saw the ancient
              church in the mid-1940s, he found it "on the point of
              collapse".[3] A few years later, an English architect, DH
              Matthews, assisted in the restoration of the building, which
              included the rebuilding of one of its wood and stone walls (a
              characteristic style of Aksumite architecture)
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

export default Debre_Damo;
