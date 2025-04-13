import React from 'react';
import { useNavigate } from 'react-router-dom';

function UnlockPage() {
    const navigate = useNavigate();

    const proceedToImageSelection = () => {
        navigate('/image-selection');
    };

    return (
        <div>
            <header>
                <h1>Telefon Entsperren - Schritt 1</h1>
            </header>
            <div className="instruction-container">
                <p>Bitte verbinden Sie das Telefon mit dem Computer. Dieses Programm funktioniert nur für Modelle älter als 2024.</p>
                <p>Um fortzufahren, klicken Sie auf "Bestätigen".</p>
                <button onClick={proceedToImageSelection}>Bestätigen</button>
            </div>
        </div>
    );
}

export default UnlockPage;
