import React, { useEffect } from 'react';

const TablaCompañias = () => {
  useEffect(() => {
    // Función para limpiar el widget anterior si se está recargando el componente
    const cleanWidget = () => {
      const widgetContainer = document.getElementById("tradingview-widget");
      if (widgetContainer) {
        while (widgetContainer.firstChild) {
          widgetContainer.removeChild(widgetContainer.firstChild);
        }
      }
    };

    cleanWidget();

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      "symbols": [
        ["Apple", "AAPL|1D"],
        ["Google", "GOOGL|1D"],
        ["Microsoft", "MSFT|1D"],
        ["Tesla", "NASDAQ:TSLA|1D"],
        ["Meta Platforms", "NASDAQ:META|1D"],
        ["Amazon", "NASDAQ:AMZN|1D"],
        ["McDonald's", "NYSE:MCD|1D"],
        ["NVIDIA", "NASDAQ:NVDA|1D"],
        ["Coca-Cola", "NYSE:KO|1D"],
        ["AT&T", "NYSE:T|1D"],
        ["Disney", "NYSE:DIS|1D"],
        ["Sony", "NYSE:SONY|1D"],
        ["Netflix", "NASDAQ:NFLX|1D"],
        ["PayPal", "NASDAQ:PYPL|1D"],
        ["Adobe", "NASDAQ:ADBE|1D"],
        ["IBM", "NYSE:IBM|1D"],
 
      ],
      "chartOnly": false,
      "width": "100%",
      "height": 500,
      "locale": "es",
      "colorTheme": "light",
      "autosize": false,
      "showVolume": false,
    });

    const widgetContainer = document.getElementById("tradingview-widget");
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => cleanWidget();
  }, []);

  return (
    <div id="tradingview-widget" className="tradingview-widget-container">
      {/* El contenido del widget se cargará aquí */}
    </div>
  );
};

export default TablaCompañias;
