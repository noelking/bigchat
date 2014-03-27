var socket;
var profile;
var email;

function init() {
	  console.log("Init");
	  socket = io.connect('http://localhost:3000');
	  createSocketListener();
}

function createSocketListener() {
	socket.on('message', function (data) {
	    console.log("Received message" + data.message);
	    displayMessage(data.message, data.sender);
	});
}

function registerUser() {
	profile = $("#userProfile").val();
	email = $("#emailAddress").val();
	if(!profile || !email) {
		alert('You must populate all fields');
	} else {
		$("#userProfile").prop('disabled', true);
		$("#emailAddress").prop('disabled', true);
		$("#register").hide();
	}
}

function send() {
	if(profile) {
		var messageText = $("#message").val();
		socket.emit('message', { message: messageText,  sender: profile});
		displayMessage(messageText, profile);
		$("#message").val('');
	} else {
		alert('You need to register first');
	}
}

function displayMessage(message, sender) {
	sender = (sender) ? sender + ": " : "";
	$("#messages").append("<span> "+ sender + message + "</span><br/>");
}


 