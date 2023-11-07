import React, { useEffect, useRef } from 'react';

const TradingViewTickerTape = () => {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !scriptRef.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500" },
          { "proName": "FOREXCOM:NSXUSD", "title": "US 100" },
          { "proName": "FX_IDC:EURUSD", "title": "EUR/USD" },
          { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
          { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "es"
      });

      containerRef.current.appendChild(script);
      scriptRef.current = script;
    }

    return () => {
      if (containerRef.current && scriptRef.current) {
        containerRef.current.removeChild(scriptRef.current);
      }
      scriptRef.current = null;
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewTickerTape;

