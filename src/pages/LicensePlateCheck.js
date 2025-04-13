import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/LicensePlateCheck.css';

function LicensePlateCheck() {
  const [licensePlate, setLicensePlate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateLicensePlate = () => {
    const trimmedLicensePlate = licensePlate.trim();
    if (!trimmedLicensePlate) {
      setError('Das Kennzeichenfeld darf nicht leer sein.');
      return;
    }

    const regex = /^[A-ZÄÖÜ]{1,3}-[A-Z]{1,2}-\d{1,4}$/;
    if (!regex.test(trimmedLicensePlate)) {
      setError('Bitte geben Sie ein gültiges deutsches Kennzeichen ein (z. B. B-MW-1234).');
    } else {
      setError('');
      alert('Kennzeichen erfolgreich überprüft!');
    }
  };

  return (
    <div className="license-plate-check">
      <header>
        <h1>Kennzeichen überprüfen</h1>
      </header>
      <div className="instruction-container">
        <p>Bitte geben Sie das Kennzeichen ein, um Informationen abzurufen.</p>
        <input
          type="text"
          placeholder="Kennzeichen eingeben (z. B. B-MW-1234)"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
        />
        <button onClick={validateLicensePlate}>Suchen</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <button onClick={() => navigate('/')}>Zurück zur Startseite</button>
    </div>
  );
}

export default LicensePlateCheck;
