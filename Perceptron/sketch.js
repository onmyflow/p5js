input = new Array(2)
var p1
var solution = []
var lr = 0.01


function setup(){
  translate(200,200)
  createCanvas(500,500)
  background(51)
  stroke(255)
  strokeWeight(1)
for(i=0;i < 100000; i++){
  var xsol = random(width)
  var ysol = random(height)
  var out = -1
  if(ysol > f(xsol)){
    out = 1
  }
  solution[i] = {
    x:xsol,
    y:ysol,
    output: out
  }
}
  p1 = new Perceptron(200)
  for(i = 0; i < solution.length; i++){
    p1.train(solution[i].x, solution[i].y,  solution[i].output)
  }
  console.log(p1.errTotal)
  for(i = 0; i < solution.length; i++){
    if(p1.guess(solution[i].x,solution[i].y) == 1){
        fill(0,255,0)
      } else if(p1.guess(solution[i].x,solution[i].y,) == -1){
        fill(255,0,0)
      }
    ellipse(solution[i].x,solution[i].y,10,10)
  }
  console.log(p1.w1, p1.w2, p1.biasWeight)
  line(0,f(0),width,f(width))
}
function draw(){
  
}
function mousePressed(){

}

function f(x){
  return 0.2*x+200
}
