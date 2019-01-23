var words = ["Software Engineer", "Father", "Game Developer", "Husband", "Gamer", "Hunter", "Web Designer", "Writer", "Fisherman"];

var curWordCounter = 0;
var curCharCounter = 0;
var shortInterval = 150;
var longInterval = 5000;

e = document.getElementById("typeWriter");

var do_this = null;
var wasDelayed = false;

// TODO: Randomize the wait inbetween letters for a more realistic typing speed
// TODO: Fast character removal instead of clearing to mimic deletion
function typeWriter() {
    if(wasDelayed) {
        e.innerHTML = "";
        wasDelayed = false;
        resetTypeWriterInterval(shortInterval);
        return;
    }
    curWord = words[curWordCounter];
    curChar = curWord[curCharCounter];

    e.innerHTML = e.innerHTML + curChar;

    curCharCounter += 1;

    if (curCharCounter >= curWord.length) {
        curWordCounter += 1;
        curCharCounter = 0;

        resetTypeWriterInterval(longInterval);
        wasDelayed = true;

        if (curWordCounter >= words.length) {
            curWordCounter = 0;
        }
    }
}

function resetTypeWriterInterval(interval) {
    window.clearInterval(do_this);
    do_this = window.setInterval(typeWriter, interval);
}

resetTypeWriterInterval(shortInterval);
