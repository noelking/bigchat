var datasource = require('../datasource')
var error = require('../error')

function successfulMessage(response) {
	if(response)
	    response.jsonp(200, 'Successfully saved message');
}

function errorMessage(response) {
	if(response)
		error.send('Failed to save message','',response);
}

var persist = {
	persist: function(message, response) {
		var query = 'insert into message (sender, content, sent_at) VALUES(?,?, now()) using TTL 10';
		var params = [message.sender, message.content];
		datasource.execute(query, params, response, function (response) {
			successfulMessage(response);
		}, 
		function (response) {
			errorMessage(response);
		});
	}
}

module.exports = persist
