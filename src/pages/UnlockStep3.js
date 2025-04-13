import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/chatPopup.css'; // Import the shared chat popup styles
import '../assets/css/unlockStep3.css'; // Import the new styles for locked/unlocked tags
import openChat1 from '../assets/js/chat1Content';
import openChat2 from '../assets/js/chat2Content';
import openChat3 from '../assets/js/chat3Content';

function UnlockStep3() {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [chatNumber, setChatNumber] = useState(null);

  const openChat = (chatNumber) => {
    setChatNumber(chatNumber);
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
    setChatNumber(null);
  };

  const renderChatContent = () => {
    switch (chatNumber) {
      case 1:
        return openChat1();
      case 2:
        return openChat2();
      case 3:
        return openChat3();
      default:
        return null;
    }
  };

  return (
    <div>
      <header>
        <h1>Telefon Entsperren - Schritt 3</h1>
      </header>
      <div className="final-folder-container">
        <p>Herzlichen Glückwunsch! Das Telefon wurde erfolgreich entsperrt.</p>
        <ul className="folder-tree">
          {/* Folder structure */}
          <li>
            <span>📁 DCIM</span>
            <ul>
              <li>🖼️ photo1.jpg <span className="locked-tag">&lt;locked&gt;</span></li>
              <li>🖼️ photo2.jpg <span className="locked-tag">&lt;locked&gt;</span></li>
              <li>🖼️ photo3.jpg <span className="locked-tag">&lt;locked&gt;</span></li>
            </ul>
          </li>
          <li>
            <span>📁 Downloads</span>
            <ul>
              <li>📄 file1.pdf <span className="locked-tag">&lt;locked&gt;</span></li>
              <li>📄 file2.zip <span className="locked-tag">&lt;locked&gt;</span></li>
            </ul>
          </li>
          <li>
            <span>📁 Chats</span>
            <ul>
              <li>
                <span className="chat-link" onClick={() => openChat(1)}>💬 Chat-Mama.msg</span> 
                <span className="unlocked-tag">&lt;unlocked&gt;</span>
              </li>
              <li>
                <span className="chat-link" onClick={() => openChat(2)}>💬 Chat-Markus.txt</span> 
                <span className="unlocked-tag">&lt;unlocked&gt;</span>
              </li>
              <li>
                <span className="chat-link" onClick={() => openChat(3)}>💬 Chat-Fabrizio.txt</span> 
                <span className="unlocked-tag">&lt;unlocked&gt;</span>
              </li>
            </ul>
          </li>
          <li>
            <span>📁 Documents</span>
            <ul>
              <li>📄 doc1.docx <span className="locked-tag">&lt;locked&gt;</span></li>
              <li>📄 doc2.xlsx <span className="locked-tag">&lt;locked&gt;</span></li>
            </ul>
          </li>
        </ul>
      </div>
      <button onClick={() => navigate('/')}>🏠 Startseite</button>

      {showChat && (
        <div className="chat-popup">
          {renderChatContent()}
          <button onClick={closeChat} className="close-chat">Schließen</button>
        </div>
      )}
    </div>
  );
}

export default UnlockStep3;
