let numSegmentos = 8;
let numRepetitions = 6;
let numCopias = 5;
let sliderSegmentos;
let sliderRepetitions;
let sliderCopias;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  const createSliderWithRange = (min, max, value, xPosition, yPosition) => {
    const slider = createSlider(min, max, value);
    slider.position(xPosition, yPosition);
    slider.style('width', '380px');
    return slider;
  }

  const centerX = width / 2;
  const sliderY = 10;

  sliderSegmentos = createSliderWithRange(4, 20, numSegmentos, centerX - 190, sliderY);
  sliderRepetitions = createSliderWithRange(1, 10, numRepetitions, centerX - 190, sliderY + 30);
  sliderCopias = createSliderWithRange(1, 10, numCopias, centerX - 190, sliderY + 60);
}

function draw() {
  background(242,218,189);
  stroke(242,61,61); 
  

  numSegmentos = sliderSegmentos.value();
  numRepetitions = sliderRepetitions.value();
  numCopias = sliderCopias.value();
  
  const angulo = TWO_PI / numSegmentos;
  
  for (let k = 0; k < numCopias; k++) {
    drawPattern(width / 2, height / 2, angulo, 0, 20, 100, numRepetitions, numSegmentos, k * (TWO_PI / numCopias));
  }
}

function drawPattern(x, y, angulo, iter, radioMin, radioMax, numRepetitions, numSegmentos, rotation) {
  if (iter < numRepetitions) {
    push();
    translate(x, y);
    rotate(rotation);
    const radio = map(iter, 0, numRepetitions - 1, radioMin, radioMax);
    for (let i = 0; i < numSegmentos; i++) {
      const x1 = cos(angulo * i) * radio;
      const y1 = sin(angulo * i) * radio;
      const x2 = cos(angulo * (i + 1)) * radio;
      const y2 = sin(angulo * (i + 1)) * radio;
      line(x1, y1, x2, y2);
    }
    pop();
    drawPattern(x, y, angulo, iter + 1, radioMin, radioMax, numRepetitions, numSegmentos, rotation);
  }
}
