const {modelVar, connectVar} = require('./mongo')
const express = require('express')
const server = express();

const cors = require('cors')
server.use(cors())
server.use(express.json())
const routes = require('./routes')

console.log('Checking')

function checkStatus(){
    return modelVar.db.readyState === 1;
}

server.use('/', routes)

server.get('/', (request, response) => {
    const connectStatus = checkStatus()
    let verifyConnc = connectStatus ? 'Connected Successfully' : 'Not connected' 
    response.send(verifyConnc)
})
server.listen(3001, () => {
    connectVar()
  console.log("working")})