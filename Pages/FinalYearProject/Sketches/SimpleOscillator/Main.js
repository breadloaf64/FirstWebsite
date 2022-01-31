var counter = 0;

var pause = false;

var currentMouseX = 0;
var currentMouseY = 0;

function preload() {
	preloadSound();
}

function setup() {
	myStandardSetup();
	setupSound();
}

function keyPressed() {
	if (key == ' '){ //this means space bar, since it is a space inside of the single quotes
    playPause();
  }
}

function playPause() {
	pause = ! pause;
	if (pause) {
		sine.stop();
	}
	else {
		sine.loop();
	}
}

function draw() {
	handleCurrentMouse();
	handleSound();
	render();
	counter++;
	text("window.innerWidth: " + window.innerWidth, 100, 100);
    text("window.innerHeight: " + window.innerHeight, 100, 150);
	text("width: " + width, 100, 200);
	text("Height: " + height, 100, 250);
}

function handleCurrentMouse() {
	if (!pause) {
		currentMouseX = mouseX;
		currentMouseY = mouseY;
	}
}

function render() {
	background(colBackground);
	drawGrid();
	drawWave();
	drawCrosshair();
	drawReadouts();
	drawPauseScreen();
	image(imgNoiseTexture, 0, 0);
	drawFrame();
}
