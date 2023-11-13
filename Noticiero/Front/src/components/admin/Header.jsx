import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png';

function Header() {
  return (
    <div className="bg-white-800 p-4 flex justify-between items-center">
      <div className="flex-grow flex items-center justify-center">
        <img src={logo} alt="Logo de la página" className="max-w-xs" />
      </div>
      <div className="ml-4">
        <Link to="/Login">
          <button className="bg-red-700 text-white py-2 px-4 rounded cursor-pointer">
            Iniciar Sesión
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
