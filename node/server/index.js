const http = require("http");

const app = http.createServer((req, res) => {
    res.end("Hello, World!");
});

app.listen(8080, () => console.log("Listening"));
