import closeChat from './closeChat';

export default function openChat3() {
    const chatContent = `
        <div class="chat-popup">
            <!-- Chat messages -->
            <div class="chat-message mama"><span>Fabrizio – 11:23</span><p>Großer Meister, wo treffen wir uns nach erfolgreicher Tat?</p></div>
            <div class="chat-message user"><span>Du – 11:31</span><p>START: Bohl❌Remigius</p></div>
            <div class="chat-message user"><span>Du – 11:33</span><p>➡️⚽➡️🌳⬆️💯➡️💯⬆️💯💯</p></div>
            <button onclick="closeChat()" class="close-chat">Schließen</button>
        </div>
    `;
    const popup = document.createElement('div');
    popup.innerHTML = chatContent;
    document.body.appendChild(popup);
}
