preload = () => {
  img = loadImage("bg.png");
}

setup = () => {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(2);
  noLoop();
  frameRate(30);
  radius = round(random(50, 250));
  size = random(0.3, 0.7);
  rC = round(random(12, 32));
}

draw = () => {
  image(img, 0, 0, width, height);
  beginShape();
  let count = 100;
  if (count <= 200) {
    count += random(0.01, 0.1);
  }
  translate(width / 7, height / 2.5);
  noFill();
  for (let i = 0; i <= 255; i++) {
    let colorLine = map(i, 0, 0, 0, 255);
    stroke(colorLine);
  }
  strokeWeight(random(0.1, 0.5));
  for (i = 0; i < TWO_PI * radius; i += PI / rC) {
    cDown = map(i / TWO_PI, 0, radius, 1, 2 / height);
    noiseWave = noise(cos(i * 4), sin(i * 4) * cDown + count) * size;
    curveVertex(-120 + width / 2 - cos(i) * width * noiseWave * cDown, 80 - sin(i) * width * noiseWave * cDown);
  }
  endShape();
}

keyPressed = () => {
  if (key === 's' || key === 'S') {
    save();
  }
  if (key === '0') {
    noLoop();
  } else if (key === '1') {
    loop();
  }
}