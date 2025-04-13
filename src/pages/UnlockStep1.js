import React from 'react';
import { useNavigate } from 'react-router-dom';

function UnlockStep1() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/step2');
  };

  return (
    <div>
      <header>
        <h1>Telefon Entsperren - Schritt 1</h1>
      </header>
      <div className="instruction-container">
        {/* Instructions for the user */}
        <p>Bitte verbinden Sie das Telefon mit dem Computer. Dieses Programm funktioniert nur für Modelle älter als 2024.</p>
        <p>Um fortzufahren, klicken Sie auf "Bestätigen".</p>
        <button onClick={handleConfirm}>Bestätigen</button>
      </div>
      <button onClick={() => navigate('/')}>Zurück zur Startseite</button>
    </div>
  );
}

export default UnlockStep1;
