function setup() {

   createCanvas(windowWidth, windowHeight);
   strokeWeight(1);
}

let e = 0;
let a2 = 0.0;

function draw() {
   background(0);
   let a = 0.0;
   let inc = TWO_PI/(windowWidth/2);
   for (i = 0; i < windowWidth; i=i+10) {
      let dinI = ((mouseY/2)+20);
      let dinX = ((mouseX/2)+20);
      let midWW = (windowWidth/2);
      let midWH = (mouseY/2);
      let color = (255*dinI)/windowWidth;
      color = color+50;
      stroke(color,255-color,255,100);
      line(0, 0, i, midWH + sin(a)*dinI);
       //line(midWW, mouseY, i, windowHeight);
       // line(midWW, sin(a)*dinI, i, windowHeight);
       line(windowWidth, windowWidth, i, midWH + sin(a)*dinI);
       line(windowWidth, 0, i, midWH + sin(a)*dinI);
       line(0, windowWidth, i, midWH + sin(a)*dinI);
       line(windowWidth, midWH, i, midWH +  sin(a2)*dinI);
       line(0, midWH, i, midWH + sin(a2)*dinI);
       line(midWW, 0, i, midWH +  sin(a2)*dinI);
       line(midWW, windowWidth, i, midWH + sin(a2)*dinI);
      let calcE = i + midWW + sin(a2)*dinI;
      noFill();
      ellipse(midWW, mouseY-i, calcE, calcE);
      a = a + inc;
      a2 = a2 + (inc/400);
   }
}
