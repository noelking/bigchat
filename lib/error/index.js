var responseObj = require('../response')

module.exports = {
	send: function(messageText, errorList, response) {
    	var obj = responseObj.error(messageText,errorList);
    	console.log("error being returned")
    	console.log(obj);
    	response.jsonp(500, obj);
	}
}