import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';

function AddUser() {
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={async (values, actions) => {
          var res = await axios.post('http://localhost:3000/users', values);

          actions.resetForm();
          alert('Datos agregados correctamente');
          window.location = '/';
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <div className="container mx-auto mt-20 p-10 max-w-md">
            <h2 className="text-3xl font-black text-center">Agregar nuevo usuario</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Usuario
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={values.username}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300"
                />
              </div>
              <button type="submit" className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
                Guardar
              </button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default AddUser;


