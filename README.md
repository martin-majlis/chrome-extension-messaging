# chrome-extension-messaging

## Motivation

I wanted to access content of the page. Official [documentation](https://developer.chrome.com/extensions/messaging) suggests to use messages. However linked [example](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/docs/examples/api/messaging?autodive=0) is using deprecated functions which doesn't work anymore.

There is lot of StackOverflow questions about this:
* [Chrome Extension - Get DOM content](http://stackoverflow.com/questions/19758028/chrome-extension-get-dom-content)
* [Chrome extension: sendMessage doesn't work](http://stackoverflow.com/questions/23122192/chrome-extension-sendmessage-doesnt-work)
* [Chrome-extension undefined response from background to popup](http://stackoverflow.com/questions/30813861/chrome-extension-undefined-response-from-background-to-popup)
* [Passing message from background.js to popup.js](http://stackoverflow.com/questions/12265403/passing-message-from-background-js-to-popup-js)

But all of them were suggesting different solution, and some of them haven't been working for me.


## How To Use It

This example is showing sending messages from popup to `background.js` and back.

* Clone repo and follow instructions from the [getting started](https://developer.chrome.com/extensions/getstarted) guide.
* In [chrome://extensions/](chrome://extensions/) click on *Inspect views: background page* to get logs for `background.js`.
* On loaded page right click on extension icon and pick *Inspect pop-up* to see logs for `popup.js`.
* Click on the icon and send message.
* You will see logs in consoles.
