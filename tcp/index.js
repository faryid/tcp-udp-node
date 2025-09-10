const net = require("net");

const server = net.createServer((socket) => {
    socket.write("Hello, there\n");
    socket.on("data", (data) => {
        console.log(data.toString());
    });
});

server.listen(3001);
