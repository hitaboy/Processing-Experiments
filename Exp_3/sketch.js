// Based on https://processing.org/examples/follow3.html

let x = new Array(200).fill(0);
let y = new Array(200).fill(0);
let segLength = 5;

function setup() {
   createCanvas(windowWidth, windowHeight);
   strokeWeight(20);
   stroke(255, 100);
}

function draw() {
  background(0);
  dragSegment(0, mouseX, mouseY);
  for(i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  let dx = xin - x[i];
  let dy = yin - y[i];
  let angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle, i);
}

function segment(x, y, a, i) {
  stroke(x, (255-i), (y+i), 80);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  for(i=0; i<10; i++) {
    rotate(a/(i/50));
    line(x, y, x+1, y+1);
  }
  pop();
}
