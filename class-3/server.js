const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const myServer = http.createServer((req, res)=> {
    res.end("<h1 style='color:green;'>Server is running</h1>")
});

myServer.listen(port, ()=> {
    console.log(`Server is running successfully at http://${hostname}:${port}`);
});