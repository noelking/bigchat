var socket;

function init() {
	  console.log("Init");
	  socket = io.connect('http://localhost:3000');
	  createSocketListener();
}

function createSocketListener() {
	socket.on('message', function (data) {
		console.log('Received data');
	    console.log(data.message);
	    displayMessage(data.message);
	});
}

function send() {
	console.log("Sending message");
	var messageText = $("#message").val();
	console.log("Sending " + messageText);
	socket.emit('message', { message: messageText });
	displayMessage(messageText);
}

function displayMessage(message) {
	$("#messages").append("<span> " + message + "</span><br/>");
}


 