'use strict';

var kraken = require('kraken-js')
  , express = require('express')
  , http = require('http');


var app, port, server;

app = express();
app.use(kraken());
server = http.createServer(app);
port = process.env.PORT || process.argv[2] || 8000;

server.listen(port, function() {
  console.log('listening on port ' + port);
});
