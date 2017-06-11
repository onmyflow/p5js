input = new Array(2)
var p1
var solution = []
var lr = 0.0001


function setup(){

  createCanvas(500,500)
  background(51)
  stroke(255)
  strokeWeight(1)
// for(i=0;i < 100000; i++){
//   var xsol = random(width)
//   var ysol = random(height)
//   var out = -1
//   if(ysol > f(xsol)){
//     out = 1
//   }
//   solution[i] = {
//     x:xsol,
//     y:ysol,
//     output: out
//   }
// }
  p1 = new Perceptron(9210, lr, 2)
  // for(i = 0; i < solution.length; i++){
  //
  // }
  // console.log(p1.errTotal)
  // for(i = 0; i < solution.length; i++){
  //
  // }
  // console.log(p1.w1, p1.w2, p1.biasWeight)
}
function draw(){
// translate(width/2, height/2)
var randomX = random(width)
var randomY = random(height)
var out
if(randomX > 200 && randomX < 300 && randomY > 200 && randomY < 300){
  out = 1
} else {
  out = -1
}

  p1.train([randomX, randomY],  out)
  if(p1.guess([randomX, randomY]) > 0){
      fill(0,255,0)
    } else {
      fill(255,0,0)
    }
  var xMap = randomX
  var yMap = map(randomY,0,height,height,0)
  ellipse(xMap, yMap,10,10)
  //console.log(p1.weights)
}
function mousePressed(){
  console.log(p1.guess(mouseX, mouseY))
}

function f(x){
  return 0
}
