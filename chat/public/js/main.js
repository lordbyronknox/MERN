const chatForm = document.getElementById('chat-form');
const socket = io();

socket.on('message', message => {       
    console.log(message);
})

//submit message
chatForm.addEventListener('submit', (e) => {    //listen for a 'submit'
    e.preventDefault(); //stops default: when submitting a form it automatically submits to a file.
    const msg = e.target.elements.msg.value; //gets text input.
    socket.emit('chatMessage', msg);
})