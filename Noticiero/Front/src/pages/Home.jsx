import React from "react";
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";

function Home() {
  return (
    <div>
      <Header />
      <Navbar/>
      <div className="content">
        {/* Tu contenido principal va aquí */}
      </div>
    </div>
  );
}

export default Home;