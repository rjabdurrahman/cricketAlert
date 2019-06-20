$(function () {
    var liveElements = document.getElementsByClassName('cb-min-bat-rw');
    var matchEnd = document.getElementsByClassName('cb-text-mom');
    var data = liveElements[1].firstElementChild.textContent.split(' ')[1].split('/');
    var team = liveElements[1].firstElementChild.textContent.split(' ')[0];
    var batsman = document.getElementsByClassName('cb-min-inf cb-col-100 ng-scope')[0].textContent.split('SR')[1].split('*')[0];
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
        chrome.runtime.sendMessage({ title: team + " " + data[0] + '/' + data[1], msg: "Mach is being notified!" }, function (response) {
            console.log(response.farewell);
        });
        // Initial Notificaion End
        setInterval(function () {
            var newData = document.getElementsByClassName('cb-min-bat-rw')[1].firstElementChild.textContent.split(' ')[1].split('/');
            if (newData[0] != data[0]) {
                var sRun = (newData[0] - data[0]) > 1 ? " Runs\n" : " Run\n";
                chrome.runtime.sendMessage({ title: batsman + (newData[0] - data[0]) + sRun + team + " " + newData[0] + '/' + newData[1], msg: "Mach is being notified!", run: newData[0] - data[0] }, function (response) {
                    console.log(response.farewell);
                });
                batsman = document.getElementsByClassName('cb-min-inf cb-col-100 ng-scope')[0].textContent.split('SR')[1].split('*')[0];
            }
            if (newData[1] != data[1]) {
                var bowler = document.getElementsByClassName('cb-min-inf cb-col-100 ng-scope')[1].textContent.split('ECO')[1].split('*')[0];
                chrome.runtime.sendMessage({ title: "OUT! by " + bowler + "\n" + team + " " + newData[0] + '/' + newData[1], msg: "Mach is being notified!", wicket: newData[1] - data[1] }, function (response) {
                    console.log(response.farewell);
                });
            }
            data[0] = newData[0];
            data[1] = newData[1];
        }, 3000)
        // Post Nofication End
    }
});