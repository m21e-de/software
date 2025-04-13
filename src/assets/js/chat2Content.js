import closeChat from './closeChat';

export default function openChat2() {
    const chatContent = `
        <div class="chat-popup">
            <!-- Chat messages -->
            <div class="chat-message mama"><span>Markus – 08:00</span><p>Tag Chef, wo soll ich die Beute ablegen?</p></div>
            <div class="chat-message user"><span>Du – 09:05</span><p>START: Bohl❌Remigius</p></div>
            <div class="chat-message user"><span>Du – 09:07</span><p>⬆️🧓🚌➡️🧱🛣️➡️🐑🐑➡️💯💯💯💯💯🍎🌳 </p></div>
            <button onclick="closeChat()" class="close-chat">Schließen</button>
        </div>
    `;
    const popup = document.createElement('div');
    popup.innerHTML = chatContent;
    document.body.appendChild(popup);
}
