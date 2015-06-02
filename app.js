var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var _ = require('lodash');

app.use(express.static('dist'));
app.use(express.static('public'));

require('./app/routes')(app);

app.use(function(err, req, res, next) {
    require('util').inspect(err);
    res.status(500).send({ error: err.message });
});

io.on('connection', function(socket){
  socket.on('order', function(order){
  	console.log(order);
  });
});

http.listen(9999, function() {
    console.log('Running on port 9999');
});