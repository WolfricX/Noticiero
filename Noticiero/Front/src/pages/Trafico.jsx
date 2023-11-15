// En Trafico.jsx
import React from "react";
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";
import MapWithTraffic from "../components/admin/mapa";

function Trafico() {
  const googleMapsApiKey = "AIzaSyCb3eataWmN4KWxPq1gk6IEUllv_U8CmyM";

  return (
    <div>
      <Header />
      <Navbar/>
      <div className="content">
        <MapWithTraffic googleMapsApiKey={googleMapsApiKey} />
      </div>
    </div>
  );
}

export default Trafico;

