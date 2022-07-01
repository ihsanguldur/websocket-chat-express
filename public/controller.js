const sendButton = document.getElementById('send-button');
const chatBody = document.getElementById('chat-body');
const textBox = document.getElementById('text-box');

const socket = io.connect('http://localhost:5000');
let sender;

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    let message = textBox.value;

    socket.emit('chatting', {
        message,
        sender
    });
});

socket.on('connect', () =>{
    let showID = document.getElementById('socket-id');
    sender = socket.id;
    showID.innerText = sender;
});

socket.on('chatting',(arg) => {
    if (socket.id === arg.sender){
        chatBody.insertAdjacentHTML('beforeend', `
        <div class="bubble sender-bubble">
            ${arg.message}
        </div>
    `);
    } else {
        chatBody.insertAdjacentHTML('beforeend', `
        <div class="bubble receiver-bubble">
            ${arg.message}
        </div>
    `);
    }

});