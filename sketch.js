var tree = [];
var gen = 0;
var r;
var le;
var leaves = [];
function setup() {
  createCanvas(200, 200);
  var root = new Branch(createVector(width/2,height),createVector(width/2,height-0.275*height));
  tree[0]=root;
   r = random([4,6,8,10,12,14,16]);
   le = random([4,6,8,10,12,14,16]);
}


function draw() {
  background(173, 216, 230);
  stroke(255);
  for(var i = 0; i < tree.length; i++){ 

    tree[i].show();
  }
  for(i = 0; i < leaves.length; i++){ 
    fill(0,255,0);
    noStroke();
    ellipse(leaves[i].x,leaves[i].y,2,2);
  }
  if(frameCount%20==0){
     var l = tree.length;
  if(gen<9){
  for(var i = 0; i < l; i++){
    if(!tree[i].d){
      tree.push(tree[i].branchR());
      tree.push(tree[i].branchL());
    }
  }
  gen++;
  if(gen===9){
    for(var i = 0; i < tree.length; i++){
      if(!tree[i].d){
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }  
  }
  } 
    
    if(gen===9&&frameCount%220===0){
      background(173, 216, 230);
       tree=[new Branch(createVector(width/2,height),createVector(width/2,height-0.275*height))];
      leaves=[];
      gen=0;
      r = random([2,4,6,8,10,12,14,16]);
      le = random([2,4,6,8,10,12,14,16]);
    
  }
  }
  
}