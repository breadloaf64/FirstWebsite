// set this to true if you want the standard square sketch size
let forceSquare = true;

var imgNoiseTexture;

var colFrame;
var colBackground;
var colReadouts;
var colCrosshair;
var colWave;
var colGrid;

function setColours() {
	colFrame = color("#2f3e46");
	colBackground = color("#354f52");
	colReadouts = color("#84a98c");
	colCrosshair = color("#84a98c");
	colWave = color("#cad2c5");
	colGrid = color("#52796f");
}

function setNoiseTexture() {
	let amount = 0.2;
	let img = createImage(int(width), int(height));
	img.loadPixels();
	for (let i = 0; i < img.width; i++) {
		for (let j = 0; j < img.height; j++) {
			if (random(1) < amount) {
				img.set(i, j, color(random(255), 15));
			} else {
				img.set(i, j, color(0, 0));
			}
		}
	}
	img.updatePixels();
	imgNoiseTexture = img;
}

function drawFrame() {
	strokeWeight(30);
	stroke(colFrame);
	noFill();
	rect(0, 0, width, height);
}

function myStandardSetup() {
	// Move the canvas so it’s inside our <div id="sketch-holder">.
	let canvas = createCanvas(100, 100);
  	canvas.parent('sketch-holder');
	windowResized();
	createMetaTag();
	setColours();
	setNoiseTexture();
}

function touchMoved() {
  // prevent the display from moving around when you touch it
  return false;
}

function createMetaTag() {
	let meta = createElement('meta');
	meta.attribute('name', 'viewport');
	meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

	let head = select('head');
	meta.parent(head);
}

function windowResized() {
	// const css = getComputedStyle(canvas.parentElement),
    //     marginWidth = round(float(css.marginLeft) + float(css.marginRight)),
    //     marginHeight = round(float(css.marginTop) + float(css.marginBottom)),
    //     w = windowWidth - marginWidth, h = windowHeight - marginHeight;

	let parent = canvas.parentElement;
	let w = parent.clientWidth;
	let h = parent.clientHeight;

	print(w);
	let size = min(w, h);
  	resizeCanvas(size, size, true);
}
