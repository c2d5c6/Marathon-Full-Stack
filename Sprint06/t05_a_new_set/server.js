const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url === '/style.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        fs.createReadStream('style.css').pipe(res);
    } else if (req.url === '/script.js') {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.createReadStream('script.js').pipe(res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plane'});
        res.end('Error 404!');
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})