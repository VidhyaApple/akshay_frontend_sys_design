const express = require('express');
const {Server} = require('socket.io');
const app = express();
const port = 5111;
const server = app.listen(port,() => {
    console.log(`server is running at ${port}`)
});
const io = new Server(server);

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection',(socket) => {
    socket.on('chat message',(msg) => {
        io.emit('chat message',msg)
    })
    socket.on('closed',(mes) => {
        console.log('connection closed')
    })
})


