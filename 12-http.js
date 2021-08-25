const http = require('http');

//req = incoming request
//res = response


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }

    if (req.url === '/about') {
        res.end('About Us')
    }

    res.end(`
        <h1>Oopps!</h1>
       <a href="/">Back home</a> 
    `)
})

server.listen(5000)
