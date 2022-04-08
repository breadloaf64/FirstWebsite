var imgNoiseTexture;

function setColours() {
	// scene_title
	colTitleText = color(0);
	colSubtitleText = color(0);
	
	colBackground = color("#f0ead2");
	
	colCapSquare = color("#a98467");
	colOuterCapSquare = color("#000000");
	
	colButtonFill = color("#f0ead2");
	colButtonBorder = color("#adc178");
	colButtonText = color("#6c584c");
	
	//colReadout = color("#000000");
	colGrid = color("#dde5b6");
	colPlayhead = color("#adc178");
	colVoice = color("#6c584c");
	
	colsSequenceBackgrounds = [color("#ffcfd2"), color("#b9fbc0"), color("#90dbf4"), color("#e5e5e5")];
}

function setNoiseTexture() {
	let amount = 0.2;
	let img = createImage(int(width), int(height));
	let imgCut = createImage(int(width), int(height));
	img.loadPixels();
	for (let i = 0; i < img.width; i++) {
		for (let j = 0; j < img.height; j++) {
			if (random(1) < amount) {
				img.set(i, j, color(random(255), 15));
				if (!coordinateIsInBounds(i, j, layout.subSubPrimarySquare_x, layout.subSubPrimarySquare_y, layout.subSubPrimarySquare_w, layout.subSubPrimarySquare_h)) {
					imgCut.set(i, j, color(random(255), 15));
				}
				else imgCut.set(i, j, color(0, 0));
			} else {
				img.set(i, j, color(0, 0));
				imgCut.set(i, j, color(0, 0));
			}
		}
	}
	img.updatePixels();
	imgCut.updatePixels();
	imgNoiseTexture = img;
	imgNoiseTextureCut = imgCut;
}

function drawFrame() {
	strokeWeight(30);
	stroke(colFrame);
	noFill();
	rect(0, 0, width, height);
}

function myStandardSetup() {
	setCanvas();
	createMetaTag();
	setColours();
	setNoiseTexture();
	pixelDensity(1);
}

function setCanvas () {
	if (embeddedOnWebsite) {
		// Move the canvas so it’s inside our <div id="sketch-holder">.
		let canvas = createCanvas(100, 100);

		try {
			canvas.parent('sketch-holder');
		}
		catch {}
	}
	else {
		createCanvas(windowWidth, windowHeight);
	}
	windowResized();
}