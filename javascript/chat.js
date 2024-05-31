// script.js
const chatIcon = document.getElementById('chat-icon');
const chatPopup = document.getElementById('chat-popup');
const chatWindow = document.getElementById('chat-window');
const startChatBtn = document.getElementById('start-chat');
const closeChatBtn = document.getElementById('close-chat');
const closeChatWindowBtn = document.getElementById('close-chat-window');

if (chatIcon && chatPopup && chatWindow && startChatBtn && closeChatBtn && closeChatWindowBtn) {
    chatIcon.addEventListener('click', () => {
        chatPopup.style.display = 'flex';
    });

    closeChatBtn.addEventListener('click', () => {
        chatPopup.style.display = 'none';
    });

    startChatBtn.addEventListener('click', () => {
        chatPopup.style.display = 'none';
        chatWindow.style.display = 'flex';
    });

    closeChatWindowBtn.addEventListener('click', () => {
        chatWindow.style.display = 'none';
    });
}

