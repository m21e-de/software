import React from 'react';
import './styles/ChatPopup.css'; // Import styles

function ChatPopup({ content, onClose }) {
  return (
    <div className="chat-popup">
      <div className="chat-popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <pre>{content || 'No chat content available.'}</pre> {/* Fallback message */}
      </div>
    </div>
  );
}

export default ChatPopup;
