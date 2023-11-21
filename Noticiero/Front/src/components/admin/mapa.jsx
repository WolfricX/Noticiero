import React, { useState } from 'react';
import { GoogleMap, LoadScript, TrafficLayer, TransitLayer, BicyclingLayer } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 21.1619,
  lng: -86.8515,
};

const YOUR_GOOGLE_MAPS_API_KEY = 'AIzaSyCb3eataWmN4KWxPq1gk6IEUllv_U8CmyM';

const MapWithTraffic = () => {
  const [trafficLayerVisible, setTrafficLayerVisible] = useState(false);
  const [transitLayerVisible, setTransitLayerVisible] = useState(false);
  const [bicyclingLayerVisible, setBicyclingLayerVisible] = useState(false);

  const toggleTrafficLayer = () => {
    setTrafficLayerVisible(!trafficLayerVisible);
  };

  const toggleTransitLayer = () => {
    setTransitLayerVisible(!transitLayerVisible);
  };

  const toggleBicyclingLayer = () => {
    setBicyclingLayerVisible(!bicyclingLayerVisible);
  };

  return (
    <LoadScript googleMapsApiKey={YOUR_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
        {trafficLayerVisible && <TrafficLayer autoUpdate />}
        {transitLayerVisible && <TransitLayer />}
        {bicyclingLayerVisible && <BicyclingLayer />}
      </GoogleMap>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={toggleTrafficLayer}
          className={`px-4 py-2 bg-red-700 text-white ${trafficLayerVisible ? 'bg-green-500' : ''}`}
        >
          {trafficLayerVisible ? 'Ocultar Capa de Tráfico' : 'Mostrar Capa de Tráfico'}
        </button>
        <button
          onClick={toggleTransitLayer}
          className={`px-4 py-2 bg-red-700 text-white ${transitLayerVisible ? 'bg-green-500' : ''}`}
        >
          {transitLayerVisible ? 'Ocultar Capa de Transporte Público' : 'Mostrar Capa de Transporte Público'}
        </button>
        <button
          onClick={toggleBicyclingLayer}
          className={`px-4 py-2 bg-red-700 text-white ${bicyclingLayerVisible ? 'bg-green-500' : ''}`}
        >
          {bicyclingLayerVisible ? 'Ocultar Capa de Rutas para Bicicletas' : 'Mostrar Capa de Rutas para Bicicletas'}
        </button>
      </div>
    </LoadScript>
  );
};

export default MapWithTraffic;






