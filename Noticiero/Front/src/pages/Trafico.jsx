import React from "react";
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";
import MapWithTraffic from "../components/admin/mapa"; // Asegúrate de que la ruta al archivo sea correcta

function Trafico() {
  // Aquí deberás definir tu API key de Google Maps, preferentemente obteniéndola de variables de entorno o de una configuración segura
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



