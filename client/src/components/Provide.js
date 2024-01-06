import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Provide = (props) => {
  useEffect(() => {
    // Update the map center when the 'center' prop changes
    map?.setView(props.center, map.getZoom());
  }, [props.center]);

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  let map;
    useEffect(() => {
    console.log('Props updated:', props.url, props.attribution);
  }, [props.url, props.attribution]);
  return (
    <div>
      <div style={{ width: '100%', height: '400px', overflowY: 'scroll' }}>
        <MapContainer
          center={props.center}
          zoom={14}
          style={{ width: '100%', height: '100%' }}
          whenCreated={(m) => (map = m)} // Save the map instance
        >
          <TileLayer
            url={props.url}
            attribution={props.attribution}
          />
          <Marker position={props.center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Provide;

