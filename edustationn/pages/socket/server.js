import io from 'socket.io'
import http from 'http'

const app = require('express')()
const server = http.createServer(app)
const socket = io(server)

// store the list of messages in memory
const messages = []

socket.on('connection', (client) => {
  client.on('sendMessage', (data) => {
    console.log(`received message: ${data}`)
    messages.push(data)
    socket.emit('newMessage', data)
  })
  // send the list of messages to the client when it connects
  client.emit('previousMessages', messages)
})

server.listen(3000, () => console.log('server is running on port 3000'))
