// var colCounter = 0; // color change counter
// var themeCounter = 0;
// var themeCounter2 = 1;
// var LerpCounter = 0.01;

// var colors = [];
// var colors[0] = [#ff3399, #ff99cc, #ff1a75, #ffb3d1]// Sakura
// var colors[1] = {#3E16A3, #4E2F9B, #BBA7E2, #F3B4FF}// Purple
// var colors[2] = {#0E36D3, #D1EDFF, #8CD1FF, #4A65D3}// Ice
// var colors[3] = {#5DFDCB, #A0DDFF, #77FF94, #72FFE7}// Algae
// var colors[4] = {#F2DCAE, #FFAF05, #F9BC39, #D89911}// Gold
// var colors[5] = {#E1E2EF, #97A7B3, #464655, #B0C0BC}// White
// var colors[6] = {#CA054D, #540D6E, #4A154B, #C48ED0}// Dark Pink
// var colors[7] = {#D91028, #FFE38E, #D91028, #EA415C}// Kimetsu EP19
// var colors[8] = {#F2BA1F, #3300DB, #FFB200, #A500FF}// Kobe


function Particle() {

    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.prevPos = this.pos.copy();
    this.r = random(1, 2); // Particle size
    this.c1 =floor(random(0, 4));
    this.c2 =floor(random(0, 4));
    this.c;

  this.display=function() {
    push();
    translate(width, 0);
    scale(-1, 1);
    strokeWeight(1);
    stroke(255);
    // line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    point(this.pos.x,this.pos.y);
    this.updatePreviousPos();
    pop();
  }

  this.update=function() {

    var mouse = createVector(-mouseX+width,mouseY);
    mouse.sub(this.pos);
    mouse.limit(2);
    this.acc.add(mouse);
  
    this.vel.add( this.acc );
    this.vel.mult( 0.95 );
    this.pos.add( this.vel );

    this.acc.mult(0.6);
    // this.setColor();
  }

  this.run=function() {
    this.update();
    this.checkEdges();
    this.display();
  }

  this.updatePreviousPos=function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.checkEdges=function() {
    if ( this.pos.x < 0 ) {this.pos.x = width-1;this.updatePreviousPos();} 
    if ( this.pos.x > width ){this.pos.x = 1;this.updatePreviousPos();}
    if ( this.pos.y < 0 ){this.pos.y = height-1;this.updatePreviousPos();}
    if ( this.pos.y > height ){this.pos.y = 1;this.updatePreviousPos();}
  }

  this.applyForce=function(f) {
    this.acc.add( f );
  }

  this.follow=function(flowfield) {
    var x = floor(this.pos.x / res);
    var y = floor(this.pos.y / res);
    var index = x + y * flowfield.cols;
    var force = flowfield.vectors[index];
    force.mult(0.1);
    this.applyForce(force);
  }

  this.mouseFollow = function(){
    var mouseVector = createVector(mouseX, mouseY);
    this.applyForce(mouseFollow);
  }
}