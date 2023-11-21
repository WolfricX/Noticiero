import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { RiLineChartLine, RiUserLine } from "react-icons/ri";

function Noticias() {
  const [Noticias, setNoticias] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedNoticia, setEditedNoticia] = useState({ id: null, titulo: '' });

  useEffect(() => {
    fecthNoticias();
  }, []);

  const fecthNoticias = async () => {
    const response = await axios.get('http://localhost:3000/noticias');
    setNoticias(response.data);
    console.log('Datos de la api');
    console.log(response);
  }

  const handleEdit = (id) => {
    const noticiaToEdit = noticias.find((noticias) => noticias.id === id);
    setEditing(true);
    setEditedNoticia({ id: noticiaToEdit.id, titulo: noticiaToEdit.titulo });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/noticias/${id}`);
  };

  const handleSave = () => {
    // Actualiza el usuario editado
    const updatedNoticias = noticias.map((noticias) =>
      noticias.id === editedNoticia.id ? editedNoticia : noticias
    );
    setUsers(updatedNoticias);

    // Restablece el estado de edición
    setEditing(false);
    setEditedNoticia({ id: null, titulo: '' });
  };

  return (
    <>


<div className="flex flex-col h-screen">
        
        <div className="flex flex- h-screen">
          <Sidebar/>
        <div className="flex-1 p-4 ">
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-red-700 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            <RiUserLine className="text-5xl" />
            <h4 className="text-2xl">Total de Noticias:</h4>
            <span  className="text-5xl text-white"></span>
            
            <a href="./Agregarn" className="text-5 text-center bg-red-600 p-2 rounded text-white">Agregar Noticia</a>
          </div>
          </section>
          <br></br>


          
          <div className="w-full bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="w-1/5 px-9 py-4 text-left font-bold text-gray-700">ID</th>
        <th className="w-1/5 px-9 py-4 text-left font-bold text-gray-700">Noticia</th>
        <th className="w-1/5 px-6 py-4 text-left font-bold text-gray-700">Resumen</th>
        <th className="w-1/5 px-9 py-4 text-left font-bold text-gray-700">Imagen</th>
        <th className="w-1/5 px-9 py-4 text-left font-bold text-gray-700">Eliminar</th>
        <th className="w-1/5 px-9 py-4 text-left font-bold text-gray-700">Actualizar</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {Noticias.map((noticia) => (
        <tr key={noticia.id}>
          <td className="px-6 py-4 text-gray-800">{noticia.id}</td>
          <td className="px-5 py-4">
            {editing && editedNoticia.id === noticia.id ? (
              <input
                type="text"
                value={editedNoticia.titulo}
                onChange={(e) =>
                  setEditedNoticia({ ...editedNoticia, titulo: e.target.value })
                }
                className="w-full px-2 py-1 border rounded-md"
              />
            ) : (
              noticia.titulo
            )}
          </td>
          <td className="px-6 py-4 text-gray-800">{noticia.resumen}</td>
          <td className="px-6 py-4">
            <img
              className="w-32 h-32 object-contain rounded"
              src={noticia.imagen}
              alt={noticia.titulo}
            />
          </td>
          <td className="px-6 py-4">
            <button
              onClick={() => handleDelete(noticia.id)}
              className="px-4 py-2 text-white bg-red-700 rounded hover:bg-red-700"
            >
              Eliminar
            </button>
          </td>
          <td className="px-6 py-4">
            <button
              className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-700"
            >
              Actualizar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>




          </div>
        </div>
      </div>





                       
                       
                       
 

    </>
  );
}

export default Noticias;
