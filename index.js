let express = require('express');
let cookieSession = require('cookie-session')
let cors = require('cors')
let router = express.Router()
let app = express();


app.get('/', (req, res) => {
  res.send("Hello World")
});





app.listen(3000, () => {
   console.log("Listening at http://localhost:3000")
});