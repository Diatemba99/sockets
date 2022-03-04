const { Socket } = require('socket.io');

const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server);
app.get('/', (req, res )=> {
    res.sendFile(`${__dirname}/public/index.html`)
});

io.on('connection', (socket) => {
    console.log("USer connected !");
    socket.on('chat message', (msg) => {
        //console.log("Message: " + msg);
        io.emit("chat message", msg);
    });

    
});


server.listen(3000, () => {
    console.log("Listen on 3000 port")
})