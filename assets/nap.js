function napRoulette() {
    var randomNumber = Math.floor(Math.random() * 180) + 1;
    var napRoulette = document.getElementById("text01");
    napRoulette.style.fontSize = "2.5rem";
    napRoulette.innerHTML = "Nap for " + convertTime(randomNumber) + ".";
}
// when button is clicked, run napRoulette function
window.onload = function () {
    var button = document.getElementById("startGame");
    button.onclick = napRoulette;
}

//convert minutes to hours and minutes
function convertTime(minutes) {
    var hours = Math.floor(minutes / 60) + " hour";
    var andWord = " and ";
    var minutes = minutes % 60 + " minute";
    // if hours less than one ignore
    if (hours != "1 hour") {
        hours = hours + "s";
    }
    if (hours == "0 hours"){
        hours = "";
        andWord = "";
    }
    // add and if minutes less than one ignore
    if (minutes != "1 minute") {
        minutes = minutes + "s";
    }
    if (minutes == "0 minute") {
        minutes = "";
    }
    return hours + andWord + minutes;
}