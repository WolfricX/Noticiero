import React, { useState, useEffect } from 'react';
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";

function Motivacional() {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener la cita:', error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex flex-col items-center min-h-screen">
      <br></br>
      <h1 className="font-semibold text-4xl">Encuentra tu frase favorita aqui:</h1>

      <div className="flex flex-wrap justify-center items-center my-8">
<div className="max-w-lg lg:max-w-2xl mx-4 my-8 p-8 bg-white shadow-md rounded-lg text-center">
  {loading ? (
    <p className="text-gray-600">Cargando...</p>
  ) : error ? (
    <p className="text-red-600">Ha ocurrido un error al cargar la cita.</p>
  ) : (
    <blockquote className="italic text-gray-600">
      <p className="mb-4">"{quote.content}"</p>
      <footer className="text-gray-700">— {quote.author}</footer>
    </blockquote>
  )}
  <button
    className="mt-4 mx-auto bg-red-700 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
    onClick={fetchQuote}
  >
    Generar Nueva Frase
  </button>
</div>

      </div>
    </div>
      </div>

  );
}

export default Motivacional;

