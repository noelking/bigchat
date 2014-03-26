var express = require('express');
var responses = require('../response')
var error = require('../error')
var cassandra = require('../cassandra')

var app = module.exports = express();

app.post('/api/message', function (req, res) {
	console.log(req);
    console.log(req);
    //var message = {}
    //message.content = req.body;
    //message.sender = req.body.sender;

    return 
});

function save(message, response) {
	cassandra.client.execute('insert into message (sender, content, sent_at) VALUES(?,?, now()) using TTL 10;', [message.sender, message.content],
	  function(err, result) {
	    if (err) console.log('execute failed');
	    else console.log('got saved ' + result);
	  }
	);
}
