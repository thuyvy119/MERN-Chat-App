import { Server } from 'socket.io'
import http from 'http'
import express from 'express'

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5000'],
        methods: ['GET', 'POST'],
    },
})

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId]
}

const userSocketMap = {} // {userId: socketId}

io.on('connection', (socket) => {
    console.log('a user connected', socket.id)

    const userId = socket.handshake.query.userId
    if (userId !== 'undefined') userSocketMap[userId] = socket.id

    // io.emit used to listen to events
    io.emit('getOnlineUsers', Object.keys(userSocketMap))
    console.log('Emitting Online Users:', Object.keys(userSocketMap))

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id)
        delete userSocketMap[userId]
        console.log('Updated User-Socket Map after disconnect:', userSocketMap)
        io.emit('getOnlineUsers', Object.keys(userSocketMap))
    })
})

export { app, io, server }
