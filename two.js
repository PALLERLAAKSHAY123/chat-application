document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message');
    const messagesList = document.getElementById('messages');
    const usernameInput = document.getElementById('username');

    let username = '';

    loginButton.addEventListener('click', () => {
        username = usernameInput.value.trim();
        if (username) {
            messageInput.disabled = false;
            sendButton.disabled = false;
            usernameInput.disabled = true;
            loginButton.disabled = true;
            alert(`Welcome, ${username}!`);
        } else {
            alert('Please enter a username.');
        }
    });

    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageItem = document.createElement('li');
            messageItem.classList.add('message');
            messageItem.textContent = `${username}: ${messageText}`;
            messagesList.appendChild(messageItem);
            messageInput.value = '';
            messagesList.scrollTop = messagesList.scrollHeight; // Scroll to the bottom
        }
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});