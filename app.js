const http = require('http');

const server = http.createServer((req, res)=> {
    server.on('request', (req, res) => {
        res.end('welcome')
    })
})

server.listen(5000);