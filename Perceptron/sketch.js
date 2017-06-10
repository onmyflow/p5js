var n
var lab;
var lr = 1
var randX
var randY
var pointArray = []
var inputs = []
function setup(){
  translate(width/2, height/2)
  createCanvas(400,400)
  background(51)
  n = new neuron()
  for(i=0; i< 5200; i++){
    randX = random(width)
    randY = random(height)
    lab = 1
    if(randY > f(randX)){
      lab = -1
    }
    n.train(randX, randY, lab)
    var res = n.guess(randX, randY)
    console.log(res)
    pointArray.push(new createPoint(randX, randY, res))
  }
}


function draw(){
  background(51)
  stroke(255)
  for(i = 0; i < pointArray.length; i++){
    pointArray[i].show()
  }

}

function neuron(){
  this.weightX = random(-1,1)
  this.weightY = random(-1,1)

  this.guessResult = -1

  this.guess = function(x, y){

    this.ans = this.weightX * x + this.weightY * y
    console.log(this.weightX, this.weightY)
    this.guessResult = sign(this.ans)
    return(this.guessResult)

  }

  this.train = function(x, y, label){
    this.error = label - this.guessResult
    this.weightX += this.error * x * lr
    this.weightY += this.error * y * lr


  }
}
function f(x){
  return(1*x+0)
}
