let express = require('express');
let cookieSession = require('cookie-session')
let cors = require('cors')
let router = express.Router()
let app = express();

app.use(express.json())

let storage = []
let chats = {}
let users = []

// chats = {"Eng" : [Amy, Tom]}

app.get('/', (req, res) => {
  res.send("Hello World")
});

// This is sending messages to a chat
app.post('/chat', (req, res) => {
   storage.push(req.body)
   console.log(storage)
   res.status(201).json(req.body)
})

// This is joining a chat & supports multiple chats
app.post('/join/:id', (req, res) => {
let id = req.params.id
let joinedChat = chats[id]
console.log(id, users, chats)
if (joinedChat){
   chats[id].push(req.body.username)
   res.send("You have joined the chat")
}
else{
   chats[id] = [].push(req.body.username)
   res.send("You have joined the chat")
}
})


// This is handling multiple users in a chat


app.listen(3000, () => {
   console.log("Listening at http://localhost:3000")
});