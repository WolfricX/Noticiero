import React, { useEffect, useRef } from 'react';

const GeneralBolsa = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // La función para cargar el widget
    const loadWidget = () => {
      new window.TradingView.widget({
        "width": "100%",
        "height": 600,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "America/Mexico_City",
        "theme": "light",
        "style": "1",
        "locale": "es",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_021bd"
      });
    };

    // Crear el elemento de script para la biblioteca de TradingView
    const scriptLibrary = document.createElement('script');
    scriptLibrary.src = 'https://s3.tradingview.com/tv.js';
    scriptLibrary.async = true;

    // Ejecutar el widget una vez que la biblioteca esté cargada
    scriptLibrary.onload = loadWidget;

    document.body.appendChild(scriptLibrary);

    // Limpiar al desmontar el componente
    return () => {
      document.body.removeChild(scriptLibrary);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_021bd" ref={widgetRef}></div>
    </div>
  );
};

export default GeneralBolsa;
