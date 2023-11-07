import React, { useState, useEffect } from "react";
import axios from "axios"; // Asegúrate de haber instalado axios
import Header from '../components/admin/Header';
import Navbar from "../components/admin/Nabvar";
import TradingViewTickerTape from "../components/admin/Widgetvalbarra";
import TablaCompañias from "../components/admin/widgetresumen";
import Criptodivisas from "../components/admin/Criptotabla";
import GeneralBolsa from "../components/admin/Tablavaloresgen";
function Valores() {


  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex-grow p-4">
      <TradingViewTickerTape />
      <div className="text-center text-2xl font-bold">
      <h1>Valor de las acciones de las compañias mas fuertes</h1>
      </div>
      <TablaCompañias/>
      <div className="text-center text-2xl font-bold">
      <h1>Criptodivisas</h1>
      </div>
      <Criptodivisas/>
      <div className="text-center text-2xl font-bold">
      <h1>Bolsa general</h1>
      <GeneralBolsa/>
      </div>

      </div>
    </div>
  );
}

export default Valores;
