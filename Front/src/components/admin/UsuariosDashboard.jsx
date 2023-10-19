import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

function UsuariosDashboard() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ id: null, username: '' });

  useEffect(() => {
    fecthUsers();
  }, []);

  const fecthUsers = async () => {
    const response = await axios.get('http://localhost:3000/users');
    setUsers(response.data);
    console.log('Datos de la api');
    console.log(response);
  }

  const handleEdit = (id) => {
    const userToEdit = users.find((users) => users.id === id);
    setEditing(true);
    setEditedUser({ id: userToEdit.id, username: userToEdit.username });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`);
  };

  const handleSave = () => {
    // Actualiza el usuario editado
    const updatedUsers = users.map((users) =>
      users.id === editedUser.id ? editedUser : users
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
          <div className="flex-1 p-4">
            <div className="w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Id
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    User
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Password
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((users) => (
                    <tr key={users.id}>
                      <th key={users.username}>{users.id}</th>

                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        {editing && editedUser.id === users.id ? (
                          <input
                            type="text"
                            value={editedUser.username}
                            onChange={(e) =>
                              setEditedUser({ ...editedUser, username: e.target.value })
                            }
                          />
                        ) : (
                          users.username
                        )}
                      </td>

                      <th key={users.password}>{users.password}</th>

                      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <button
                          onClick={() => handleDelete(users.id)}
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

export default UsuariosDashboard;
