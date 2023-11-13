// MapWithTraffic.jsx
import React from 'react';
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';

const mapContainerStyle = {
  height: 600,
  width: "100%",
};

const center = {
    lat: 21.1619,
    lng: -86.8515,
  };
  

// Asegúrate de reemplazar 'YOUR_GOOGLE_MAPS_API_KEY' con tu clave de API real
const YOUR_GOOGLE_MAPS_API_KEY = 'AIzaSyCb3eataWmN4KWxPq1gk6IEUllv_U8CmyM';

const MapWithTraffic = () => {
  return (
    <LoadScript
      googleMapsApiKey={YOUR_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        <TrafficLayer autoUpdate />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithTraffic;


