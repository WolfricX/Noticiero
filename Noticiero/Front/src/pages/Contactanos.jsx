import React from "react";
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";

function Contactanos() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Línea WhatsApp</h2>
          <p className="text-lg">9981253698 - Angel Adame</p>
          <p className="text-lg">9984777863 - Juan Salmerón</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Línea de Correo Electrónico</h2>
          <p className="text-lg">todaynoticias@gmail.com</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Comunícate con Nosotros</h2>
          <p className="text-lg">
            Para obtener una pronta respuesta, es necesario comunicarse a alguna de nuestras líneas.
            Un asesor se comunicará con usted y estará listo para responder cualquier consulta.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contactanos;
