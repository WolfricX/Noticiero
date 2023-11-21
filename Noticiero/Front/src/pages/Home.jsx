import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";
import Card from './card'; // Asegúrate de importar el componente Card

function Home() {
  const [Noticias, setNoticias] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedNoticia, setEditedNoticia] = useState({ id: null, titulo: '' });

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get('http://localhost:3000/noticias');
        setNoticias(response.data);
      } catch (error) {
        console.error("Error al cargar noticias", error);
      }
    };

    fetchNoticias();
  }, []);

  const handleEdit = (id) => {
    const noticiaToEdit = Noticias.find((noticia) => noticia.id === id);
    setEditing(true);
    setEditedNoticia({ id: noticiaToEdit.id, titulo: noticiaToEdit.titulo });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/noticias/${id}`);
    fetchNoticias();
  };

  const handleSave = () => {
    const updatedNoticias = Noticias.map((noticia) =>
      noticia.id === editedNoticia.id ? editedNoticia : noticia
    );
    setNoticias(updatedNoticias);
    setEditing(false);
    setEditedNoticia({ id: null, titulo: '' });
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col h-screen">
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Noticias.map((noticia) => (
              <div key={noticia.id} className="p-2">
                <Link to={`/noticias/${noticia.id}`}>
                  <Card noticia={noticia} className="p-4 bg-white rounded-lg shadow-md" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
