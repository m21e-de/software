import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../public/assets/css/unlockPhone.css'; // Import the CSS file

function ImageSelectionPage({ remainingTries, setRemainingTries }) {
    const navigate = useNavigate();

    const handleImageClick = (imageNumber) => {
        if (imageNumber === 7) {
            navigate('/final');
        } else {
            setRemainingTries((prev) => prev - 1);
            if (remainingTries - 1 === 0) {
                alert('Zu viele Fehlversuche! Der Vorgang wurde abgebrochen.');
                navigate('/');
            } else {
                alert('Falscher Fingerabdruck! Bitte versuchen Sie es erneut.');
            }
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
        </div>
    );
}

export default ImageSelectionPage;
