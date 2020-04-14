var particleNum = 2000;
var particles = [];
var flowfield;
var canvas;
var res = 12;


function setup() {
  canvas = createCanvas(windowWidth , windowHeight ,P2D);
  canvas.style("position:fixed")
  canvas.style("top", "0");
  canvas.style("left", "0");
  canvas.style("z-index", "-1");

  colorMode(HSB, 255);
  for ( var i=0; i<particleNum; i++) {
    particles[i] = new Particle();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(0,100);
  rect(0,0,width,height);
  for (var i = 0; i < particles.length; i++) {
    particles[i].run();
  }
}
