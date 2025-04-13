// Cookie utility functions
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function deleteCookie(name) {
    setCookie(name, '', -1);
}

// Initialize remainingTries from cookies or default to 3
let remainingTries = parseInt(getCookie('remainingTries')) || 3;

function unlockPhone() {
    try {
        window.location.href = '/'; // Navigate to the first step
    } catch (error) {
        console.error('Error navigating to the first step:', error);
    }
}

function proceedToImageSelection() {
    remainingTries = 3; // Reset the counter
    setCookie('remainingTries', remainingTries, 1); // Persist the counter
    try {
        window.location.href = '/step2'; // Navigate to the image selection page
    } catch (error) {
        console.error('Error navigating to the image selection page:', error);
    }
}

function handleImageClick(imageNumber) {
    if (imageNumber === 7) {
        // Correct image selected, proceed to the next page
        proceedToFinalPage();
    } else {
        // Incorrect image selected, decrement the counter
        remainingTries--;
        setCookie('remainingTries', remainingTries, 1); // Persist the counter
        document.getElementById('remaining-tries').textContent = remainingTries;

        if (remainingTries === 0) {
            alert('Zu viele Fehlversuche! Der Vorgang wurde abgebrochen.');
            unlockPhone();
        } else {
            alert('Falsches Bild! Bitte versuchen Sie es erneut.');
        }
    }
}

function proceedToFinalPage() {
    try {
        window.location.href = '/step3'; // Navigate to the final page
    } catch (error) {
        console.error('Error navigating to the final page:', error);
    }
}

function openChat1() {
    // Modularized chat content
    const chatContent = `
        <div class="chat-popup">
            <!-- Chat messages -->
            <div class="chat-message user"><span>Du – 12:43</span><p>Hey Mama, hast du eigentlich dein Rezept für die Spaghetti Bolo irgendwo aufgeschrieben? Ich hab total Lust drauf und will sie mal wieder selbst machen.</p></div>
            <div class="chat-message mama"><span>Mama – 12:45</span><p>Hallo mein Schatz 😊<br>Klar, das hab ich nicht aufgeschrieben, aber ich kann’s dir schnell hier schicken. Willst du die klassische Version oder die, die ich das letzte Mal mit Rotwein gemacht hab?</p></div>
            <div class="chat-message user"><span>Du – 12:46</span><p>Die klassische bitte – so wie früher, mit Karotten und Sellerie und allem.<br>Die hat immer am besten geschmeckt 🥰</p></div>
            <div class="chat-message mama"><span>Mama – 12:47</span><p>Na gut, dann hier:<br>– 500g Rinderhack<br>– 1 Zwiebel<br>– 2 Knoblauchzehen<br>– 1-2 Karotten<br>– 1 Stange Sellerie<br>– 1 EL Tomatenmark<br>– 1 Dose gehackte Tomaten<br>– Salz, Pfeffer, etwas Zucker<br>– Lorbeerblatt<br>– Oregano (frisch oder getrocknet)<br>– Olivenöl zum Anbraten<br>– Optional: ein kleiner Schluck Milch</p></div>
            <div class="chat-message mama"><span>Mama – 12:48</span><p>Zwiebeln, Knoblauch, Karotten und Sellerie klein schneiden und in Olivenöl anbraten. Dann das Hack dazu und krümelig braten. Tomatenmark rein, kurz mitrösten, dann die Tomaten dazu. Würzen und mindestens 30 Minuten köcheln lassen – lieber länger. Zum Schluss evtl. etwas Milch für die Rundung. Fertig 😋</p></div>
            <div class="chat-message user"><span>Du – 12:49</span><p>Perfekt, danke! Milch kommt rein, weil…?</p></div>
            <div class="chat-message mama"><span>Mama – 12:50</span><p>Die macht’s etwas milder und runder im Geschmack. Muss aber nicht – wenn du’s tomatiger magst, lass sie weg.</p></div>
            <div class="chat-message user"><span>Du – 12:51</span><p>Verstanden. Und Nudeln einfach wie immer kochen, oder? 😄</p></div>
            <div class="chat-message mama"><span>Mama – 12:51</span><p>Ja, Spaghetti al dente! Und Parmesan nicht vergessen!</p></div>
            <div class="chat-message user"><span>Du – 12:52</span><p>Mach ich. Danke dir, du Beste ❤️ Ich schick dir ein Foto, wenn’s fertig ist.</p></div>
            <div class="chat-message mama"><span>Mama – 12:53</span><p>Freu mich drauf! Und wenn was fehlt, einfach anrufen. Viel Spaß beim Kochen 😘</p></div>
            <button onclick="closeChat()" class="close-chat">Schließen</button>
        </div>
    `;
    const chatStyles = `
        <style>
            .chat-popup {
                position: fixed;
                top: 10%;
                left: 50%;
                transform: translate(-50%, 0);
                width: 400px;
                background: #f9f9f9;
                border: 1px solid #ccc;
                border-radius: 10px;
                padding: 15px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                font-family: Arial, sans-serif;
            }
            .chat-message {
                margin-bottom: 10px;
            }
            .chat-message span {
                font-weight: bold;
                display: block;
                margin-bottom: 5px;
            }
            .chat-message.user {
                text-align: right;
            }
            .chat-message.mama {
                text-align: left;
            }
            .close-chat {
                display: block;
                margin: 10px auto 0;
                padding: 5px 10px;
                background: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            .close-chat:hover {
                background: #0056b3;
            }
        </style>
    `;
    const popup = document.createElement('div');
    popup.innerHTML = chatContent + chatStyles;
    document.body.appendChild(popup);
}

function closeChat() {
    const popup = document.querySelector('.chat-popup');
    if (popup) {
        popup.remove();
    }
}
