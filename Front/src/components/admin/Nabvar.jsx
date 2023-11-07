import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white-500 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/5 text-right">
          <a href="/Home" className="text-red font-bold text-xl mx-10">Inicio</a>
          <a href="/Clima" className="text-red font-bold text-xl mx-10">Clima</a>
          <a href="/Motivacional" className="text-red font-bold text-xl mx-10">Motivacional</a>
          <a href="/Trafico" className="text-red font-bold text-xl mx-10">Tráfico</a>
          <a href="/Nosotros" className="text-red font-bold text-xl mx-10">Nosotros</a>
          <a href="/Bolsa" className="text-red font-bold text-xl mx-10">Finanzas</a>
          <a href="/Contactanos" className="text-red font-bold text-xl mx-10">Contáctanos</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


