import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/OrderDonuts.css';

function OrderDonuts() {
  const [quantity, setQuantity] = useState('');
  const [flavor, setFlavor] = useState('Schokolade');
  const [orderSuccess, setOrderSuccess] = useState(false); // New state for popup
  const navigate = useNavigate();

  const handleOrder = () => {
    if (!quantity || quantity <= 0) {
      alert('Bitte geben Sie eine gültige Anzahl ein.');
    } else {
      setOrderSuccess(true); // Show popup on successful order
    }
  };

  return (
    <div className="order-donuts">
      <header>
        <h1>Donuts bestellen</h1>
      </header>
      <div className="instruction-container">
        <p>Wählen Sie die Anzahl und Sorte der Donuts aus.</p>
        <input
          type="number"
          placeholder="Anzahl"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
          <option>Schokolade</option>
          <option>Vanille</option>
          <option>Erdbeere</option>
        </select>
        <button onClick={handleOrder}>Bestellen</button>
      </div>
      {orderSuccess && (
        <div className="popup">
          <p>Ihre Donuts wurden erfolgreich bestellt!</p>
          <button onClick={() => setOrderSuccess(false)}>Schließen</button>
        </div>
      )}
      <button onClick={() => navigate('/')}>🏠 Startseite</button>
    </div>
  );
}

export default OrderDonuts;
