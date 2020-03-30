
function Field(){

  this.zoff = 0;
  this.cols = floor(width / res)+1;
  this.rows = floor(height / res)+1;
  this.vectors = new Array(this.cols*this.rows);

  this.update=function() {
  var xoff = 0;
  for (var y = 0; y < this.rows; y++) {
    var yoff = 0;
    for (var x = 0; x < this.cols; x++) {
      var angle = noise(xoff, yoff, this.zoff) * TWO_PI*4;
      var noiseFlow =  p5.Vector.fromAngle(angle);
      noiseFlow.mult(1.4);
      var index = x + y* this.cols;
      this.vectors[index] = noiseFlow;
      yoff += 0.1;
    }
    xoff += 0.1;
  }
  this.zoff+=0.005;
}
}
