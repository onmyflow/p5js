var n
var lr = 0.5
var pointArray = []
function setup(){
  //frameRate(30)
  createCanvas(400,400)
  background(51)

n = new neuron()
}
function draw(){
  background(51)
  stroke(255)
  line(width/2 ,0, width/2 , height)
  for(i = 0; i < pointArray.length; i++){
    pointArray[i].show()
  }


  var lab;
  var randX =  random(width)
  var randY = random(height)
  if(randY < 200 && randX < 200){
    lab = 1
  } else {
    lab = -1
  }
  //console.log("mouselable:" + lab)
  var zero = n.train(randX, randY, lab)
  var res = n.guess(randX, randY)
  console.log(res)
  if(zero == "null"){
    // console.log("noDraw")
    return("noDraw")

  }
   pointArray.push(new createPoint(randX, randY, res))
}

function neuron(){
  this.weightX = random(-1,1)
  this.weightY = random(-1,1)
  this.guessResult = 0

  this.guess = function(x, y){
    this.ans = this.weightX * x + this.weightY * y
    this.guessResult = sign(this.ans)
    //console.log("weights"+ this.weightX + " // " + this.weightY)
    return(this.guessResult)

  }

  this.train = function(x, y, label){
    // console.log("guessed:" + this.guess)
    var error = (label - this.guessResult) * 2
      this.weightX = this.weightX + error * x * lr
      this.weightY = this.weightY + error * y * lr
    //console.log(error)

    // console.log(this.weightX, this.weightY, this.guess)
  }
}
