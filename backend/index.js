// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const socketIO = require('socket.io'); 
require('dotenv').config();

app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000"
    }
  });
  
  io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('sendMessage', (message) => {
      io.emit('newMessage', message);
    });
  });

app.listen(3001, () => {
  console.log('Server running on port 3001');
});