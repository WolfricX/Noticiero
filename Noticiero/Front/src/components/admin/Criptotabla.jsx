// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

const Criptodivisas = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Crear el elemento de script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    scriptElement.async = true;
    scriptElement.type = 'text/javascript';
    scriptElement.innerHTML = JSON.stringify({
      "width": "100%",
      "height": 500,
      "defaultColumn": "overview",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "light",
      "locale": "es"
    });

    // Adjuntar el script al div ref
    widgetRef.current.appendChild(scriptElement);

    // Limpiar al desmontar
    return () => {
      if (widgetRef.current) {
        widgetRef.current.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={widgetRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default Criptodivisas;

