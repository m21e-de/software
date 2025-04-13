import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatPopup from '../components/ChatPopup'; // Import the new ChatPopup component
import openChat1 from '../assets/js/chat1Content';
import openChat2 from '../assets/js/chat2Content';
import openChat3 from '../assets/js/chat3Content';

function UnlockStep3() {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [chatContent, setChatContent] = useState('');

  const openChat = (chatNumber) => {
    switch (chatNumber) {
      case 1:
        openChat1();
        break;
      case 2:
        openChat2();
        break;
      case 3:
        openChat3();
        break;
      default:
        console.error('Invalid chat number');
    }
  };
  const closeChat = () => setShowChat(false);

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
              <li>📄 photo1.jpg <span className="locked-tag">&lt;locked&gt;</span></li>
              <li>📄 photo2.jpg <span className="locked-tag">&lt;locked&gt;</span></li>
              <li>📄 photo3.jpg <span className="locked-tag">&lt;locked&gt;</span></li>
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
                <span className="chat-link" onClick={() => openChat(1)}>📄 chat1.txt</span> 
                <span className="unlocked-tag">&lt;unlocked&gt;</span>
              </li>
              <li>
                <span className="chat-link" onClick={() => openChat(2)}>📄 chat2.txt</span> 
                <span className="unlocked-tag">&lt;unlocked&gt;</span>
              </li>
              <li>
                <span className="chat-link" onClick={() => openChat(3)}>📄 chat3.txt</span> 
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
      <button onClick={() => navigate('/')}>Zurück zur Startseite</button>

      {showChat && <ChatPopup content={chatContent} onClose={closeChat} />} {/* Pass chat content */}
    </div>
  );
}

export default UnlockStep3;
