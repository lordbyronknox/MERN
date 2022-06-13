const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socketio');

const app = express();
const server = http.createServer(app)
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//run when a client connects
io.on('connection', socket => {
    //welcome current user
    socket.emit('message', 'Welcome to ChatCord!'); //socket.emit send msg to user that is connecting.
    //broadcast when a user connects.
    socket.broadcast.emit('message', 'User has joined the chat.'); //socket.broadcast.emit send msg to user that    //socket.broadcast.emit send msg to all users EXCEPT user that is connecting.
    //runs when client disconnects.
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat'); //io.emit()... sends to all.
    })


    //listen for chatMessage.
    socket.on('chatMessage', msg => {
        io.emit('message', msg);
    });
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
