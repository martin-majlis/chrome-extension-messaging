function testSendMessage() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

	console.log("Calling chrome.runtime.sendMessage");
    chrome.runtime.sendMessage(
		{s: 'popup.js - chrome.runtime.sendMessage'}, 
		function handler(response) { 
	    	console.log("popup.js - chrome.runtime.sendMessage - callback");
			console.dir(response);
	    }
	);
	console.log("Calling chrome.tabs.sendMessage");
    chrome.tabs.sendMessage(
		tabs[0].id, 
		{s: 'popup.js - chrome.tabs.sendMessage'}, 
		function(response){
			console.log("popup.js - chrome.tabs.sendMessage - callback");
			console.dir(response);
		}
	);
  });
}

document.addEventListener(
	'DOMContentLoaded', 
	function() {
		document.querySelector('#send_message').addEventListener(
			'click', 
			testSendMessage
		);
	}
);

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	console.log("popup.js - chrome.runtime.onMessage.addListener");
	console.dir(message);
});
