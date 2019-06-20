var liveElements = document.getElementsByClassName('cb-min-bat-rw');
console.log(liveElements[0]);
if (liveElements.length == 0) {
    chrome.runtime.sendMessage({ msg: "Match Yet not Started!" }, function (response) {
        console.log(response.farewell);
    });
};