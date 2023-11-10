import React, { useState, useEffect } from 'react';

function Motivacional() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-cover bg-center" style={{ backgroundImage: "url('../assets/bg.jpg')" }}>
      <div className="bg-transparent w-450px h-320px rounded-10px p-12 flex justify-center items-center flex-col shadow-lg">
        <h2 className="text-4xl font-lobster">{quote}</h2>
        <small className="text-2xl font-dancingScript mt-4">-{author}-</small>
      </div><br />
      <button className="block border-2 border-blue-600 bg-transparent px-6 py-2 text-blue-600 text-lg rounded-md cursor-pointer transition duration-1000 ease-in-out hover:bg-blue-600 hover:text-white focus:outline-none shadow-md hover:shadow-lg" onClick={fetchNewQuote}>Generate New Quote</button>
    </div>
  );
}

export default Motivacional;
