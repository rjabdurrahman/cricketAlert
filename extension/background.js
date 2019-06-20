var notifOptions = {
    type: 'basic',
    iconUrl: '/img/icons/cricket_30.png',
    title: 'Open the Cricbuzz Match URL and Reload Once.',
    message: 'Enjoy notification if minimized or in other tabs.'
}
chrome.notifications.create('installed', notifOptions);
var i = 0;
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.msg) {
            notifOptions.title = request.title;
            notifOptions.message = request.msg;
            if (request.run && request.run >= 4 && request.run < 6)
                notifOptions.iconUrl = '/img/icons/four_48.png';
            else if (request.run && request.run >= 6)
                notifOptions.iconUrl = '/img/icons/four_48.png';
            else
                notifOptions.iconUrl = '/img/icons/cricket_30.png';
            sendResponse({ farewell: "Notified" });
        }
        i++;
        chrome.notifications.create('currentRun' + i + 'x', notifOptions);
    });