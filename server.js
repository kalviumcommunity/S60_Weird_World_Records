const express = require('express')
const server = express();
const routes = require('./routes')

console.log('Checking')

server.use('/', routes)

server.get('/', (request, response) => {
    response.send('Hello World')
})

server.listen(3000, () => {
    console.log('Created a server.js file, coded in it and pushing it')
})