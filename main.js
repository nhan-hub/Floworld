var nodeNum = 2000;
var nodes = [];
var canvas;
var spd = 1;

function setup() {
    colorMode(HSB, 100);
    canvas = createCanvas(windowWidth*.9 , windowHeight );
    canvas.style("position","absolute");
    canvas.style("top", "0");
    canvas.style("left", "0");
    canvas.style("z-index", "-1");
    canvas.parent('container');

     for (var i = 0; i < nodeNum; i++) {
        nodes.push(new Node());
    }
}

function draw() {
	background(0);
	stroke(255);
	for (var i = 0; i < nodes.length; i++) {
        nodes[i].show();
        nodes[i].update();
    }

   }

function Node() {

    this.x = random(width);
    this.y = random(height);
    this.r = 1;
    this.dx = random(-2, 2); // direction of x
    this.dy = random(-1, 1); // direction of y;


    this.update = function() {
        //movement
        this.x = this.x + this.dx * 0.5 * spd;
        this.y = this.y + this.dy * 0.5 * spd;

        //bouncing on window condition
        if (this.y > height + 10 - this.r) this.dy = -1;
        if (this.y < -10 + this.r) this.dy = 1;

        if (this.x > width + 10 - this.r) this.dx = -1;
        if (this.x < -10 + this.r) this.dx = 1;
    }

    this.show = function() {
        push();
        point(this.x, this.y);
        pop();
    }
}
