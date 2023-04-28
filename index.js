// Comment
let [seconds, minutes, hours] = [0, 0, 0];
let time = document.getElementById("time");
let clock = document.getElementById("actime");
let timer = null;
startClock()

function openCard(evt, cardName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        console.log(tablinks[i].className);
    }
    document.getElementById(cardName).style.display = "block";
    evt.currentTarget.className += " active";
    console.log(document.getElementById(cardName));
}

function stopwatch() {

    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    time.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    time.innerHTML = "00:00:00";
}

function startClock() {
    const actime = new Date();
    let h = actime.getHours();
    let m = actime.getMinutes();
    let s = actime.getSeconds();
    let d = actime.getDate();
    let mon = actime.getMonth() + 1;
    let y = actime.getFullYear();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    d = checkTime(d);
    mon = checkTime(mon);

    clock.innerHTML = d + "/" + mon + "/" + y + " " + h + ":" + m + ":" + s;
    setTimeout(startClock, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

var number = document.querySelectorAll('.number div');

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click",)
}

