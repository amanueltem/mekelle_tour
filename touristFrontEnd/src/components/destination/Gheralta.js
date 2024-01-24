import React, { useState } from 'react';
import gheralta from './place_images/gheralta_mountains.jpg'
const Gheralta = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="card-header">
      <h1>Abuna Yemata Guh</h1>
        <p>
Abuna Yemata Guh is a monolithic church located in the Hawzen woreda of the Tigray Region, Ethiopia. It is situated at a height of 2,580 metres (8,460 ft)[1] and has to be climbed on foot to reach. It is notable for its dome and wall paintings dating back to the 5th century and its architecture.[2]
</p>
<img src={gheralta} alt="obelisk"/>
      </div>
      <div className="card-body">
        {showDetails ? (
          <div>
           <p>
About
The church is one of the "35-odd rock-hewn churches, the largest concentration anywhere in Ethiopia."[3] It is situated in the erstwhile Gar'alta woreda. The entrance is reached by a steep and hazardous ascent with hand and footholds in the rock.[4] Visitors have to cross a natural stone bridge with a sheer drop of approximately 250m on either side, and thereafter a final narrow wooden footbridge.[5] A strenuous ascent is followed by a climb up a vertical rock wall depending entirely on hand grips and foot holds (without additional support) crowned with a walk over a 50 cm wide ledge facing a cliff of 300 metres (980 ft) sheer drop.[6] The standing pillars are made up of Enticho and Adigrat Sandstones, which are the last erosional remnants of a sandstone formation that once covered the Precambrian basement.[7]

</p>

<p>
History
According to local legend, the church was hewn in the sixth century and dedicated to Abuna Yemata (also referred to as Abba Yem'ata), one of the Nine Saints. The Nine Saints are traditionally believed to have originated from Rome, Constantinople and Syria between the end of the fifth and beginning of the sixth centuries.[8needed]
</p>
<p>
Paintings in the church

Church interior
The paintings on the walls and domes of the church are preserved in a reasonable state. Extensive study was undertaken to understand the reason behind this phenomenon.[6] The design of the traceries in the church replicates those found in nearby churches of Gher'alta, such as Debre Tsion church. There are more paintings depicting figures from the Old Testament than from the New Testament. The dry air and lack of humidity have preserved these frescoes in their original perfection.[10] The paintings date back to initial traces of Christianity in Ethiopia and are themed around the nine saints and twelve apostles.[7] The oldest icons are in the form of diptychs and triptychs dating back to the fifteenth century.[11]
</p>
          </div>
        ) : (
          <div>
          </div>
        )}
        <button onClick={toggleDetails}>
          {showDetails ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Gheralta;

