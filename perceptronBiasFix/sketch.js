var neuron
var input
var Trainer = []
function setup(){
  createCanvas(400,400)
  background(51)
  neuron = new Perceptron(1,0.01,3)
 for(i = 0; i < 200000; i++){
   var flag = -1
   var x = map(random(width), 0, width, 0, 1)
   var y = map(random(height), 0, height, 0, 1)
    if(y < f(x)){
     flag = 1
   }
  Trainer[i] = {x,y, flag}
 }
 for(e = 0; e < Trainer.length; e++){
   neuron.train([Trainer[e].x, Trainer[e].y], Trainer[e].flag)
 }

 for(a = 0; a < 20000; a++){
   xPoint = map(random(width), 0, width, 0, 1)
   yPoint = map(random(height), 0, height, 0, 1)
   var guess = neuron.guess([xPoint, yPoint])
   if(guess > 0){
     fill(0,255, 0)
   }else{
     fill(255,0,0)
   }
   noStroke()
   ellipse(xPoint * width, yPoint * height , 5, 5 )
 }
 console.log("trained Perceptron")
 stroke(255)
 strokeWeight(3)
 line(0,g(0),width,g(width))
 }
function draw(){


}
function mousePressed(){
  console.log(neuron.guess([mouseX, mouseY]))
  }


function f(x){
  return 1 * x + 0.5
}
function g(x){
  return 0 * x + 200
}
