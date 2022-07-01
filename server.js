const express = require('express');
const socket = require('socket.io');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.SERVER_PORT || 5000;
const server = app.listen(PORT, ()=>{ //http.Server dönüyor.
    console.log('server started on ' + PORT);
});

const io = socket(server);
io.on('connection',(socket) => {
    socket.on('chatting', (arg) => {
        io.sockets.emit('chatting',arg);
    });
});

app.use(express.static('public'));

app.get('/selam', (req,res)=>{
    return res.send('selam');
});


