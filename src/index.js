import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './styles/ChatPopup.css';

// Ensure the root element exists in the DOM
const rootElement = document.getElementById('root');
if (!rootElement) {
    console.error('Root element with id "root" not found in the DOM.');
} else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
