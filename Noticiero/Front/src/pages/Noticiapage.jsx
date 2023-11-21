import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Noticiapage({ match }) {
  const [noticia, setNoticia] = useState({});

  useEffect(() => {
    const noticiaId = match.params.id; // Obtiene el ID de la noticia desde la URL
    fetchNoticia(noticiaId);
  }, [match]);

  const fetchNoticia = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/noticias/${id}`);
      setNoticia(response.data);
    } catch (error) {
      console.error('Error al obtener la noticia', error);
    }
  };

  return (
    <div>
      <h1>{noticia.titulo}</h1>
      <p>{noticia.resumen}</p>
      <p>{noticia.contenido}</p>
      {/* Aquí puedes mostrar otros detalles de la noticia */}
    </div>
  );
}

export default Noticiapage;
