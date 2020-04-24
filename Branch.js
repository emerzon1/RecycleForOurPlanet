
function Branch(start, end){
  this.start = start;
  this.end = end;

  this.d = false;
  this.show = function(){
    line(this.start.x,this.start.y,this.end.x,this.end.y);  
  }
  this.branchL = function(){
    this.d=true;
    var dir = p5.Vector.sub(this.end,this.start);
    dir.mult(0.67);
    dir.rotate(PI/le);
    var newe = p5.Vector.add(this.end, dir);
    var right = new Branch(this.end,newe);
    return right;
  }
  this.branchR = function(){
    this.d=true;
    var dir = p5.Vector.sub(this.end,this.start);
    dir.mult(0.67);
    dir.rotate(-PI/r);
    var newe = p5.Vector.add(this.end, dir);
    var left = new Branch(this.end,newe);
    return left;
  }
}