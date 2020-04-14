var colorSet = Math.random()*300;

function Particle() {

    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.prevPos = this.pos.copy();
    // this.c = random(150,180);
    this.c = colorSet + random(30);
    this.color = color(this.c,255,255);

  this.display=function() {
    push();
    translate(width, 0);
    scale(-1, 1);
    strokeWeight(1);
    stroke(this.color);
    point(this.pos.x,this.pos.y);
    this.updatePreviousPos();
    pop();
  }

  this.colorChange = function(){
    this.color = color(this.c,255,255);
    this.c += 1;
    if(this.c >= 255){
      this.c = 0;
    }
  }

  this.update=function() {

    var mouse = createVector(-mouseX+width,mouseY);
    mouse.sub(this.pos);
    mouse.limit(2);
    this.acc.add(mouse);

    this.vel.add( this.acc );
    this.vel.limit( 40 );
    this.pos.add( this.vel );

    this.acc.mult(0);
  }

  this.explosion = function(){
    if (mouseIsPressed){
    var mouse = createVector(-mouseX+width,mouseY);
    mouse.sub(this.pos);
    mouse.mult(-1);
    this.acc.add(mouse);
  }
  }
  this.run=function() {
    this.update();
    this.checkEdges();
    this.display();
    this.colorChange();
    this.explosion();
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

  this.mouseFollow = function(){
    var mouseVector = createVector(mouseX, mouseY);
    this.applyForce(mouseFollow);
  }
}
