import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { RiLineChartLine, RiUserLine } from "react-icons/ri";

function UsuariosDashboard() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ id: null, username: '' });
  const [totalUsers, setTotalUsers] = useState(0);


  useEffect(() => {
    fecthUsers();
    fetchTotalUsers();
  }, []);
  

  const fecthUsers = async () => {
    const response = await axios.get('http://localhost:3000/users');
    setUsers(response.data);
  };

  const fetchTotalUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users/count'); // Asegúrate de que la URL sea correcta
      setTotalUsers(response.data); // Suponiendo que el backend devuelve un número
    } catch (error) {
      console.error('Error fetching total user count:', error);
    }
  };
  

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditing(true);
    setEditedUser({ id: userToEdit.id, username: userToEdit.username });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`);
    // Considera actualizar la lista de usuarios después de eliminar
  };

  const handleSave = () => {
    // Actualiza el usuario editado
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);

    // Restablece el estado de edición
    setEditing(false);
    setEditedUser({ id: null, username: '' });
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
            <h4 className="text-2xl">Total de Usuarios:  {totalUsers}</h4>
            <span  className="text-5xl text-white"></span>
            
            <a href="./Register" className="text-5 text-center bg-red-600 p-2 rounded text-white">Agregar un Usuario</a>
          </div>
          </section>
          <br></br>
            <div className="w-full bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="w-1/5 px-6 py-4 text-left font-bold text-gray-700">ID</th>
                    <th className="w-1/5 px-6 py-4 text-left font-bold text-gray-700">User</th>
                    <th className="w-1/5 px-6 py-4 text-left font-bold text-gray-700">Contraseña</th>
                    <th className="w-1/5 px-6 py-4 text-left font-bold text-gray-700">Eliminar</th>
                    <th className="w-1/5 px-6 py-4 text-left font-bold text-gray-700">Actualizar</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 text-gray-800">{user.id}</td>
                      <td className="px-6 py-4 text-gray-800">
                        {editing && editedUser.id === user.id ? (
                          <input
                            type="text"
                            value={editedUser.username}
                            onChange={(e) =>
                              setEditedUser({ ...editedUser, username: e.target.value })
                            }
                            className="w-full px-2 py-1 border rounded-md"
                          />
                        ) : (
                          user.username
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-800">{user.password}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(user.id)}
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

export default UsuariosDashboard;
