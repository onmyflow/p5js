var inputs = [2,-0.5]
var aa
var points = []

function setup(){
  createCanvas(600, 600)
  background(51)
  aa = new neuron(inputs)
  for(p = 0; p < 10; p++){
    points[p] = new pointN()
  }
}
function draw(){
  background(51)
  stroke(255)
  line(0,0,width,height)
  noStroke()
  for(i=0 ; i< points.length; i++){
    points[i].show()
  }
  for(i = 0; i< points.length; i++){
    aa.train([points[i].x, points[i].y], points[i].label)
  }
}


function neuron(input){
  this.weights = new Array()
  this.result = 0
  for(i = 0; i < input.length; i++){
    this.weights[i] = random(-1, 1)
  }
  for(e = 0; e < input.length; e++){
    this.result += input[e] * this.weights[e]
  }
  this.output = sign(this.result)

  this.train = function(trainingInput, label){
    for(i=0; i< trainingInput.length; i++){
      this.error = label - this.output;
      this.weights[0] = this.weights[0] + this.error * trainingInput[0] * 0.1 }
  }

}
