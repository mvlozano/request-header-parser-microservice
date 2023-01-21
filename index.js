const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

//Middlewares
//Using CORS allow requests from other domains
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

//Endpoint for GET requests to the root
//API answers with the index page
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

//Endpoint for GET request to the /api/whoami route
//API should answers with a JSON as 
//{ipaddres: clientIP, language: browser-accept-language-property, software: user-agentSpecs}
app.get("/api/whoami", (req, res)=>{
  let ip = req.ip;
  ip = ip.slice(ip.lastIndexOf(':')+1);
  res.json({
    ipaddress: ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// listen for requests :)
const listener = app.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
});