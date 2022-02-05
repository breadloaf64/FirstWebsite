var counter = 0;

var btnPause;
var paused = true;

function preload() {
	preloadSound();
}

function setup() {
	myStandardSetup();
	makePauseButton();
	setupSound();
}

function keyPressed() {
	if (key == ' ' || key == 'p'){ //spacebar or p to pause/unpause
    pauseUnpause();
  } 
	return false;
}

function mouseClicked() {
	if (paused) pauseUnpause();
	else {
		btnPause.tryClick();
		btnArrScaleDegrees.tryClick();
		updateScale();
	}
}

function updateScale() {
	let tonic = 3;
	
	// get scale degrees from degree button array
	let degrees = []
	let index = 0;

	for (let row of btnArrScaleDegrees.buttons) {
		for (let b of row) {
			if (b.state) {
				degrees.push(index);
			}
			index++;
		}
	}
	
	userScale = new Scale(tonic, degrees);
}

function pauseUnpause() {
	paused = ! paused;
	if (paused) {
		wave.stop();
	}
	else {
		wave.loop();
	}
}

function draw() {
	if (!paused) handleSound();
	render();
	counter++;
}

