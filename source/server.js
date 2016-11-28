var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static('static'))
app.use('/src', express.static('src'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

// Listen for requests
app.listen(8080, function() {
  console.log('Magic happens on port 8080');
});