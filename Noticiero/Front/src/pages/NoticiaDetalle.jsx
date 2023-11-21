import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function NoticiaDetalle() {
  const [noticia, setNoticia] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNoticia = async () => {
      const response = await axios.get(`http://localhost:3000/noticias/${id}`);
      setNoticia(response.data);
    };

    fetchNoticia();
  }, [id]);

  if (!noticia) {
    return <div className="text-center mt-4">Cargando...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-4 p-4 border rounded-lg shadow-lg">
      {/* Título de la noticia */}
      <h2 className="text-2xl font-semibold mb-4">{noticia.titulo}</h2>

      {/* Imagen */}
      <img src={noticia.imagen} alt={noticia.titulo} className="rounded-lg mb-4" />

      {/* Resumen */}
      <p className="text-gray-600">{noticia.resumen}</p>

      {/* Contenido completo */}
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: noticia.contenido }} />
    </div>
  );
}

export default NoticiaDetalle;
