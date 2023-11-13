import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex">
          <a href="/Home" className="text-red-800 font-bold text-xl mx-10 transition duration-300 ease-in-out transform hover:scale-110 hover:text-red-700">Inicio</a>
          <a href="/Clima" className="text-red-800 font-bold text-xl mx-10 transition duration-300 ease-in-out transform hover:scale-110 hover:text-red-700">Clima</a>
          <a href="/Motivacional" className="text-red-800 font-bold text-xl mx-10 transition duration-300 ease-in-out transform hover:scale-110 hover:text-red-700">Motivacional</a>
          <a href="/Trafico" className="text-red-800 font-bold text-xl mx-10 transition duration-300 ease-in-out transform hover:scale-110 hover:text-red-700">Tráfico</a>
          <a href="/Bolsa" className="text-red-800 font-bold text-xl mx-10 transition duration-300 ease-in-out transform hover:scale-110 hover:text-red-700">Finanzas</a>
          <a href="/Nosotros" className="text-red-800 font-bold text-xl mx-10 transition duration-300 ease-in-out transform hover:scale-110 hover:text-red-700">Nosotros</a>
          <a href="/Contactanos" className="text-red-800 font-bold text-xl mx-10 transition duration-300 ease-in-out transform hover:scale-110 hover:text-red-700">Contáctanos</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
