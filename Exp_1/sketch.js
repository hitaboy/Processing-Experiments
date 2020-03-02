
// Based on https://processing.org/examples/follow3.html

let x = new Array(200).fill(0);
let y = new Array(200).fill(0);
let segLength = 18;

function preload() {
  img = loadImage('smiley.png');
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   strokeWeight(1);
   stroke(255, 100);
   angleMode(RADIANS);
}

function draw() {
   background(0);
   dragSegment(0, mouseX, mouseY);
   for(i=0; i<x.length-1; i++) {
     dragSegment(i+1, x[i], y[i]);
   }
}

function dragSegment( i, xin,yin) {
   let dx = xin - x[i];
   let dy = yin - y[i];
   let angle = atan2(dy, dx);
   x[i] = xin - cos(angle) * segLength;
   y[i] = yin - sin(angle) * segLength;
   segment(x[i], y[i], angle, i);
}

function segment( x, y, a, i) {
   strokeWeight(i*2);
   push();
   translate(x, y);
   rotate(a);
   // rect(0, 0, segLength, 2);
   image(img, 0, 0, segLength, 2);
   // line(0, 0, segLength, 0);
   // let newAngle = a*0,5;
   rotate(a*0.5);
   // rect(0, 0, segLength*30, 2);
   // line(0, 0, segLength*30, 0);
   image(img, 0, 0, segLength*30, 2);
   pop();
}
