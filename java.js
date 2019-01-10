var cb = document.getElementById('con-but');

function change() {
    cb.style.backgroundImage = "url('tweed.png')";
}

function changea() {
    cb.style.backgroundImage = "url('congruent_outline.png')";
}

var audio = new Audio("click.wav");

function sound() {
    audio.play();
}
