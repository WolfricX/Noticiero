import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

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
          <div className="flex-1 p-4">
            <div className="w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Noticia
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Resumen
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Contenido
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Imagen
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                  </tr>
                </thead>



                <tbody className="bg-white  divide-gray-200">
                  {Noticias.map((noticias) => (
                    <tr key={noticias.id}>
                      <th key={noticias.titulo}>{noticias.id}</th>

                      <td className="px-5 py-4  text-sm leading-5 font-medium text-gray-900">
                        {editing && editedNoticia.id === noticias.id ? (
                         
                         
                         <input
                            type="text"
                            value={editedNoticia.titulo}
                            onChange={(e) =>
                              setEditedNoticia({ ...editedNoticia, titulo: e.target.value })
                            }
                          />
                        ) : (
                          noticias.titulo
                        )}
                      </td>

                      
                      
                      
                      <th key={noticias.contenido}>{noticias.contenido}</th>
                      <th key={noticias.resumen}>{noticias.resumen}</th>
                      <img className='w-32 h-32 object-contain rounded' src={noticias.imagen}key={noticias.imagen}/>


                      <td className="px-5 py-4 text-sm leading-5 font-medium">
                       
                       
                       
                        <button
                          onClick={() => handleDelete(noticias.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Eliminar
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
