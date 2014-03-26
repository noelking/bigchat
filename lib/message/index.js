var express = require('express');
var responses = require('../response')
var error = require('../error')

var app = module.exports = express();
var messageSave = require('./save')

app.post('/api/message', function (req, res) {
    console.log(req);
    var message = {}
    message.content = req.body.content;
    message.sender = req.body.sender;
    messageSave.persist(message, res);
});
