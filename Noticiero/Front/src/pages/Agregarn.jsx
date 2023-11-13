import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';

function AddNoticia() {
  return (
    <>
      <Formik
        initialValues={{
          titulo: '',
          contenido: '',
        }}
        onSubmit={async (values, actions) => {
          var res = await axios.post('http://localhost:3000/noticias', values);

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
               
               
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
                  Titulo
                </label>
                <input
                  type="text"
                  name="titulo"
                  onChange={handleChange}
                  value={values.titulo}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="resumen" className="block text-sm font-medium text-gray-700">
                  Resumen
                </label>
                <input
                  type="text"
                  name="resumen"
                  onChange={handleChange}
                  value={values.resumen}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300"
                />
              </div>




              <div className="mb-3">
                <label htmlFor="contenido" className="block text-sm font-medium text-gray-700">
                  Contenido
                </label>
                <input
                  type="text"
                  name="contenido"
                  onChange={handleChange}
                  value={values.contenido}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300"
                />
              </div>
              
              
              <div className="mb-3">
                <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
                  Imagen
                </label>
                <input
                  type="text"
                  name="imagen"
                  onChange={handleChange}
                  value={values.imagen}              
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

export default AddNoticia;


