const dgram = require("dgram");
const socket = dgram.createSocket("udp4");

socket.on("message", (message, rinfo) => {
    messageText = `server got: ${message}from ${rinfo.address}:${rinfo.port}`;
    console.log(messageText);
});

socket.bind(3002);
