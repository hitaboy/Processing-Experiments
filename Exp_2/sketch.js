
// Based on https://processing.org/examples/follow3.html

let x = new Array(20).fill(0);
let y = new Array(20).fill(0);
let segLength = 30;

function setup() {
   createCanvas(windowWidth, windowHeight);
   strokeWeight(4);
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
   push();
   translate(x, y);
   rotate(a);
   line(0, 0, segLength, 0);
   for(i=0; i<100; i++) {
      rotate(a/i);
      stroke(255, (100-i));
      // point(x*(i/160), y*(i/160));
      strokeWeight((100/i));
      point(x*(i/100), y*(i/100));
   }
   pop();
}
