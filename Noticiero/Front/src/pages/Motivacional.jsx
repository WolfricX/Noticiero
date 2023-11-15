import React, { useState, useEffect } from 'react';
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";

function Motivacional() {
  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote({ content: data.content, author: data.author });
      })
      .catch(error => console.error('Error al obtener la cita:', error));
  }, []);

  return (
    <div>
      <Header />
      <Navbar/>
      <div className="content flex justify-center items-center h-screen">
        <div className="bg-red-900 text-white p-10 rounded-lg max-w-lg mx-auto text-center">
          <blockquote>
            <p className="mb-4">"{quote.content}"</p>
            <footer>— {quote.author}</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Motivacional;

