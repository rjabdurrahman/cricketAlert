var liveElements = document.getElementsByClassName('cb-min-bat-rw');
if (!liveElements[0].textContent.includes('/')) {
    chrome.runtime.sendMessage({ title: "Match Yet not Started!", msg: "Check it when match will be started!" }, function (response) {
        console.log(response.farewell);
    });
}
if (liveElements.length > 0) {
    var data = liveElements[1].firstElementChild.textContent.split(' ')[1].split('/');
    var run = data[0];
    var wicket = data[1];
    console.log('Current Run is ' + data[0]);
    chrome.runtime.sendMessage({ title: "Score" + run + '/' + wicket, msg: "Mach is being notified!" }, function (response) {
        console.log(response.farewell);
    });
}