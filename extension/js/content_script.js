// $(function () {
//     var el = document.getElementsByClassName('cb-min-bat-rw');
//     var data = el[1].firstElementChild.textContent.split(' ')[1].split('/');
//     console.log('Current Run is ' + data[0]);
//     setInterval(function () {
//         var newData = document.getElementsByClassName('cb-min-bat-rw')[1].firstElementChild.textContent.split(' ')[1].split('/');
//         if (newData[0] != data[0])
//             console.log('Current Run is ' + newData[0]);
//             data[0] = newData[0];
//     }, 3000)
// });
setInterval(function () {
    chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
        console.log(response.farewell);
    });
}, 3000);