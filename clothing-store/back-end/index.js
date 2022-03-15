const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    });
    res.end('Eae, sou uma Promise!');
});

server.listen(port, hostname, () => {
    console.log("Servidor está on!");
})