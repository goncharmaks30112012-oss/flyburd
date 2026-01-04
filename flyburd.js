let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = 256;
canvas.height = 512;

// Images
let bird = new Image();
let back = new Image();
let road = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/bird.png";
back.src = "img/back.png";
road.src = "img/road.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

let fly_audio = new Audio();
let score_audio = new Audio();

fly_audio.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";

let velY = 0 ;
let graviti = 0.2;

let xPos = 10;
let yPos = 150;

function draw() { 
    context.drawImage(back, 0, 0);
    context.drawImage(bird, xPos, yPos);

    if(yPos>= canvas.height ){
    reload();
    }
velY += graviti;
yPos += velY
}
canvas.addEventListener("mousedown", moveUp);
function moveUp() {
velY = -4;
fly_audio.play();
}


setInterval(draw, 20); 
