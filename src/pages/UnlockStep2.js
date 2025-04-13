import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/unlockPhone.css';

function UnlockStep2() {
  const [remainingTries, setRemainingTries] = useState(3);
  const navigate = useNavigate();

  const handleImageClick = (imageNumber) => {
    if (imageNumber === 7) {
      navigate('/step3');
    } else {
      setRemainingTries((prev) => {
        const newTries = prev - 1;
        if (newTries === 0) {
          alert('Zu viele Fehlversuche! Der Vorgang wurde abgebrochen.');
          navigate('/');
        } else {
          alert('Falsches Bild! Bitte versuchen Sie es erneut.');
        }
        return newTries;
      });
    }
  };

  return (
    <div>
      <header>
        <h1>Telefon Entsperren - Schritt 2</h1>
      </header>
      <div className="image-selection-container">
        <p>Dieses Gerät ist mit einem Fingerabdruck gesichert.</p>
        <p>Basierend auf unserer Datenbank, könnten folgende Fingerabdrücke in Frage kommen:</p>
        <p>Bitte den korrekten Fingerabdruck auswählen, um fortzufahren.</p>
        <p>Verbleibende Versuche: {remainingTries}</p>
        <table className="fingerprint-table">
          {/* Render fingerprint images */}
          {[...Array(2)].map((_, row) => (
            <tr key={row}>
              {[...Array(5)].map((_, col) => {
                const index = row * 5 + col + 1;
                return (
                  <td key={index}>
                    <img
                      src={`../assets/fingerprint-database/fingerprint (${index}).png`}
                      alt={`Bild ${index}`}
                      onClick={() => handleImageClick(index)}
                      className="fingerprint-image"
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </table>
      </div>
      <button onClick={() => navigate('/')}>🏠 Startseite</button>
    </div>
  );
}

export default UnlockStep2;
