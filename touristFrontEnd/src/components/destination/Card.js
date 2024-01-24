import React, { useState } from 'react';
import obelisk from './place_images/axum_obelisk.jpg'
const Card = ({ title, summary, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="card-header">
        <p>
The Obelisk of Axum (Tigrinya: ሓወልቲ ኣኽሱም, romanized: ḥawelti Akhsum; Amharic: የአክሱም ሐውልት, romanized: Ye’Åksum ḥāwelt) is a 4th-century CE, 24-metre (79 ft) tall phonolite[3] stele, weighing 160 tonnes (160 long tons; 180 short tons), in the city of Axum in Ethiopia. It is ornamented with two false doors at the base and features decorations resembling windows on all sides. The obelisk ends in a semi-circular top, which used to be enclosed by metal frames.
</p>
<img src={obelisk} alt="obelisk"/>
      </div>
      <div className="card-body">
        {showDetails ? (
          <div>
           <p>
The 'obelisk'—properly termed a stele[a] or, in the local languages, Tigrinya: hawelt; and church Ge'ez: hawelti—is found along with many other stelae in the city of Axum in modern-day Ethiopia. The stelae were probably carved and erected during the 4th century CE by subjects of the Kingdom of Aksum, an ancient Ethiopian civilization. Erection of stelae in Axum was a very old practice. Their function is supposed to be as "markers" for underground burial chambers. The largest of the grave markers were for royal burial chambers and were decorated with multi-story false windows and false doors, while lesser nobility would have smaller, less decorated ones. While there are only a few large ones standing, there are hundreds of smaller ones in various "stelae fields". It is still possible to see primitive, roughly carved stelae near more elaborate "obelisks". The last stele erected in Axum was probably the so-called King Ezana's Stele, in the 4th century CE.

</p>

<p>
King Ezana (c. 321 – c. 360), influenced by his childhood tutor Frumentius, introduced Christianity to Axum, precluding the pagan practice of erecting burial stelae (it seems that at the feet of each obelisk, together with the grave, there was also a sacrificial altar.[6]
</p>
<p>
The Italian occupation of Ethiopia ended in 1937 with looting, in which King Ezana's obelisk of Axum was taken to Italy as war booty. The monolith was cut into three pieces and transported by truck along the tortuous route between Axum and the port of Massawa, taking five trips over a period of two months. It travelled by the ship, Adwa, arriving in Naples on March 27, 1937. It was then transported to Rome, where it was restored, reassembled and erected on Porta Capena square in front of the Ministry for Italian Africa. This square would later become the headquarters of the United Nations's Food and Agriculture Organization and the Circus Maximus. The obelisk was officially unveiled on October 28, 1937 to commemorate the fifteenth anniversary of the March on Rome.[10] The operation was coordinated by Ugo Monneret de Villard.
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

export default Card;

