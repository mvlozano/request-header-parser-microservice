const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

//Middlewares
//Enable requests from any domain
app.use(cors({ optionsSuccessStatus: 200 }));
//Serving static files
app.use(express.static('public'));

//Routing
//Returns index page
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//Returns JSON with the ip, language and software values from request
app.get("/api/whoami", (req, res)=>{
  let ip = req.ip;
  ip = ip.slice(ip.lastIndexOf(':')+1);
  res.json({
    ipaddress: ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

//Starts listening for requests
app.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
});