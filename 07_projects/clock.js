const clock = document.getElementById('clock')


setInterval(function () {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

//In order to have the time change on every 1 sec we have used the setInterval method which works on every time interval mentioned in the 2nd parameter of the method. 