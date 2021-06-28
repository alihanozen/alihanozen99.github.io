function startGame() {
    setInterval(timer, 1000);
    document.getElementById("start").style.display = "none";
    document.getElementById("boxes").style.display = "block";
    document.getElementById("square0").style.display = "block";
}

var correctInt = 0
var countdown = 60;

function myFunction(idno) {
    var color1 = document.getElementById("square0");
    var style = getComputedStyle(color1);
    var c1 = style['background-color'];

    var color2 = document.getElementById(idno);
    var style2 = getComputedStyle(color2);
    var c2 = style2['background-color'];

    if (c1 === c2) {
        correctInt++;
        var sound = document.getElementById("audioTrue");
        sound.play();
        document.body.style.backgroundColor = "green"
        setTimeout(() => document.body.style.backgroundColor = "rgba(23, 57, 90, 0.753)", 300);
    } else {
        var sound = document.getElementById("audioFalse");
        sound.play();
        document.body.style.backgroundColor = "red"
        setTimeout(() => document.body.style.backgroundColor = "rgba(23, 57, 90, 0.753)", 300);
    }
}

function timer() {
    document.getElementById("correct").innerHTML = correctInt;
    document.getElementById("time").innerHTML = countdown;
    if (countdown == 0) {
        clearInterval(timer);
        alert("Score: " + correctInt);
        location.replace("index.html");
    }
    countdown--;
}