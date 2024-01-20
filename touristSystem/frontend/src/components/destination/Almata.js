import React, { useState } from 'react';
import alamata from './place_images/alamata_town.jpg'
const Alamata = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="card-header">
      <h1>Almata Town</h1>
        <p>
Alamata (Tigrinya: ኣላማጣ ) is a town in the Tigray Region of Ethiopia. Located in the Debubawi (Southern) zone of Tigray it has a latitude and longitude of 12°25′N 39°33′E and an elevation of 1,520 metres (4,990 ft) above sea level and is located along Ethiopian Highway 2. It is surrounded by Alamata woreda.
</p>
<img src={alamata} alt="obelisk"/>
      </div>
      <div className="card-body">
        {showDetails ? (
          <div>
           <p>
History
19th century
On 14 December 1895, Emperor Menilek's passed through Alamata on their way northwards against the Italians. Arbegnoch under British leadership, liberated the town from Italian control during the Second World War on 5 May 1941; it was at the southern edge of the Woyane rebellion of 1943.[1] On 14 December 1895, Emperor Menilek's passed through Alamata on their way northwards against the Italians.[citation needed].

</p>

<p>
20th century
Arbegnoch under British leadership, liberated the town from Italian control during the Second World War on 5 May 1941; it was at the southern edge of the Woyane rebellion of 1943.[citation needed]

The first reports of crop failure in Wollo, were made in October 1971 by the chief municipal officer of Alamata; this report was handled very indifferently by his superiors who did not respond until July 1972, when they asked for a revised report.[citation needed]

Alamata was garrisoned by the Derg during the Ethiopian Civil War. The Tigray People's Liberation Front captured the town in 1988.[citation needed]
</p>
<p>
Demographics
Based on the 2007 national census, Alamata has a total population of 33,214, of whom 16,140 are men and 17,074 women. 82.35% of the population said they were Orthodox Christians, and 16.96% were Muslim.[2]

The 1994 census reported this town had a total population of 26,179 of whom 12,094 were males and 14,085 were females.

Geography
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

export default Alamata;

