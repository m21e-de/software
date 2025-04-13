import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1>Auswahl</h1>
      </header>
      <div className="button-container">
        <button onClick={() => navigate('/license-plates')}>Kennzeichen überprüfen</button>
        <button onClick={() => navigate('/unlock-phone')}>Telefon entsperren</button>
        <button onClick={() => navigate('/order-donuts')}>Donuts bestellen</button>
      </div>
    </div>
  );
}

export default LandingPage;
