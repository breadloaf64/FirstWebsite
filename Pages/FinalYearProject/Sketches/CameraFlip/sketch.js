let capture;
let facingUser = true;

function setup() {
  createMetaTag();
  createCanvas(window.innerWidth, window.innerHeight);

  pixelDensity(1);

  setupCamera();

  frameRate(60);
}

function draw() {
  if (facingUser) {
    // flip camera horizontally
    translate(width, 0);
    scale(-1, 1);
  }
  image(capture, 0, 0, width, height);
}

function touchStarted() {
  facingUser = !facingUser;
  setupCamera();
}

function setupCamera() {
  if (capture) {
    capture.remove();
  }

  capture = createCapture({
    video: {
			width: width,
			height: height,
      facingMode: facingUser ? 'user' : 'environment'
    },
    audio: false
  });
  capture.hide();
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