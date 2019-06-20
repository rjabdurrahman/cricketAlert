var notifOptions = {
    type: 'basic',
    iconUrl: '/img/icons/icon_16.png',
    title: 'Score',
    message: 'Current Run is '
}
chrome.notifications.create('currentRun', notifOptions);
var i = 0;
// setInterval(function(){
//     i++;
//     chrome.notifications.create('currentRun'+ i +'x', notifOptions);
// }, 3000)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello")
            sendResponse({ farewell: "goodbye" });
        i++;
        chrome.notifications.create('currentRun' + i + 'x', notifOptions);
    });