import React from 'react';

function Card({ noticia }) {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white mb-4">
      <img
        className="w-full h-48 object-cover"
        src={noticia.imagen}
        alt={noticia.titulo}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{noticia.titulo}</div>
        <p className="text-gray-700 text-sm">{noticia.resumen}</p>
      </div>
    </div>
  );
}

export default Card;
