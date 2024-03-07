const express = require('express')
const server = express()

console.log("Checking")

server.get('/', (request, response) => {
    response.send('Hello World')
})

server.listen(3000, () => {
    console.log('Created server.js')
})