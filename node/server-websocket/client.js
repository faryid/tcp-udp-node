let ws = new WebSocket("ws://localhost:3000");

ws.onmessage = message => console.log(`message: ${message.utf8Data}`);

ws.send("Hello, there. This is a sample msg");
