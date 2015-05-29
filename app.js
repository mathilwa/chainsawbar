var http = require('http');
var _ = require('lodash');
var express = require('express');

var app = express();
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/hello', function(req, res) {
    return res.send('world');
});

app.use(function(err, req, res, next) {
    require('util').inspect(err);
    res.status(500).send({ error: err.message });
});

http.createServer(app)
    .listen(9999, function() {
        console.log('Running on port 9999');
    });
