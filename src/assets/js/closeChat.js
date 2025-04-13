export default function closeChat() {
    const popup = document.querySelector('.chat-popup');
    if (popup) {
        popup.remove();
    }
}
