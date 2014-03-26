var responses = {
	success: function(responseObj) {
		return { success: responseObj}
	},
	error: function(err_message, list) {
		var err = {
			error: {
				message: err_message,
				list: list
			}
		}
		return err
	}
}

module.exports = responses