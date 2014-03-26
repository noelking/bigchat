var client = require('../../config/cassandra')

var execute = {
	execute: function(query, params, response, successCallback, errorCallback) {
		client.execute(query, params,
		function(err, result) {
		    if (err) {
		    	errorCallback(response);
		    } 
		    else {
		    	successCallback(response);
		    }
		  }
		);
	}
}

module.exports = execute
