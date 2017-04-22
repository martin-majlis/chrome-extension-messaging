chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	console.log(message);
	
	console.log("Calling sendResponse");
	message.r = "background.js - sendResponse";
	sendResponse(message);

	console.log("Calling chrome.runtime.sendMessage");
	message.r = "background.js - chrome.runtime.sendMessage";
	chrome.runtime.sendMessage(
		message,
		function(response){
			console.log("background.js - chrome.runtime.sendMessage - callback");
			console.dir(response);
		}
	);
});
