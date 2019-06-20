$(function () {
    var liveElements = document.getElementsByClassName('cb-min-bat-rw');
    var matchEnd = document.getElementsByClassName('cb-text-mom');
    var data = liveElements[1].firstElementChild.textContent.split(' ')[1].split('/');
    // if (matchEnd && !liveElements[0].textContent.includes('/')) {
    //     chrome.runtime.sendMessage({ title: matchEnd[0].textContent, msg: "Match Ended!" }, function (response) {
    //         console.log(response.farewell);
    //     });
    // }
    // Match Not started
    if (!liveElements[0].textContent.includes('/')) {
        chrome.runtime.sendMessage({ title: "Match Yet not Started!", msg: "Check it when match will be started!" }, function (response) {
            console.log(response.farewell);
        });
    }
    else {
        // Initial Notification Start
        console.log('Current Run is ' + data[0]);
        chrome.runtime.sendMessage({ title: "Score " + data[0] + '/' + data[1], msg: "Mach is being notified!" }, function (response) {
            console.log(response.farewell);
        });
        // Initial Notificaion End
        setInterval(function () {
            var newData = document.getElementsByClassName('cb-min-bat-rw')[1].firstElementChild.textContent.split(' ')[1].split('/');
            if (newData[0] != data[0]) {
                console.log('Current Run is ' + newData[0]);
                var sRun = (newData[0] - data[0]) > 1 ? " Runs": " Run";
                chrome.runtime.sendMessage({ title: (newData[0] - data[0]) + sRun + " | Score " + newData[0] + '/' + newData[1], msg: "Mach is being notified!" }, function (response) {
                    console.log(response.farewell);
                });
            }
            if (newData[1] != data[1]) {
                console.log('Current Run is ' + newData[0]);
                chrome.runtime.sendMessage({ title: "OUT!" + " | Score" + newData[0] + '/' + newData[1], msg: "Mach is being notified!" }, function (response) {
                    console.log(response.farewell);
                });
            }
            data[0] = newData[0];
            data[1] = newData[1];
        }, 3000)
        // Post Nofication End
    }
});