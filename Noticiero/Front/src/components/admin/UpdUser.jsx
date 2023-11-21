import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Field } from 'formik';
import { useParams } from 'react-router-dom';
import './../css/UpdUser.css';
import Navbar from './../Components/Navbar';
import Sidebar from './../Components/Sidebar';

export default function UpdUser() {
  const params = useParams();
  const id = params.id;

  const [User, setUser] = useState({
    password: '',
    username: '',
  });

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setUser({
          password: response.data.password,
          username: response.data.username,
        });
      } catch (error) {
        console.error('Error al cargar los datos del usuario', error);
      }
    };
    loadUser();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="flex"> {/* Agrega la clase 'flex' aquí */}
        <Sidebar />
        
        <Formik
          initialValues={User}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            try {
              const updatedData = {
                username: values.username,
                password: values.password,
              };
              await axios.patch(`http://localhost:3000/users/${id}`, updatedData);
              actions.resetForm();
              alert('Se actualizó correctamente');
              // Redireccionar
              window.location = '/UsuariosDashboard';
            } catch (error) {
              console.error('Error al actualizar el usuario', error);
            }
          }}
        >
          {({ handleChange, handleSubmit, values }) => (
            <div className="container mx-5 my-5 p-4">
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                    Alías
                  </label>
                  <Field
                    type="text"
                    className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Contraseña
                  </label>
                  <Field
                    type="password"
                    className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>

                <button
                  className="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded"
                  type="submit"
                >
                  Guardar
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}