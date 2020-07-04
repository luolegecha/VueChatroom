const express = require('express')
const app = express()
const port = 3000

const http=app.listen(8082);
var io=require('socket.io').listen(http);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message',data=>{
        socket.broadcast.emit('emitMessage',data);
    });
  });

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))