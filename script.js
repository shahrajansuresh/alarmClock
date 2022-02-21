let setalarm = document.getElementById("setalarm");
let setbtn = document.getElementById("setbtn");
setbtn.addEventListener("click", savealarm);

function savealarm() {
    let date = setalarm.value;
    // console.log(date);
    // console.log(typeof(date));
    let settime = new Date(date);
    // console.log(settime);
    let currenttime = new Date();
    let alarmtime = settime - currenttime;
    // console.log(typeof(alarmtime));
    if (alarmtime > 0) {
        ringalarm(alarmtime);
    } else {
        // console.log("The Time Is Not Correct");
    }
}

function ringalarm(alarmtime) {
    setTimeout(() => {
        var audio = new Audio("https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3")
        audio.play();
    }, alarmtime);

}