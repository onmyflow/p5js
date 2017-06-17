function Perceptron(bias = 1, lr = 0.01, count = 2){
  this.errTotal = 0
  this.weights = []
  this.biasWeight = random(-1,1)
  this.lr = lr
  this.bias = bias
  this.lastOutput = 0;
  for(i = 0; i < count; i++){
    this.weights[i] = random(-1,1)
  }
  Perceptron.prototype.guess = function(input){
    var sum = 0;
    for(i=0; i< input.length; i++){
      sum += input[i] * this.weights[i]
    }
    sum += this.bias * this.biasWeight
    return this.activate(sum)
  }
  Perceptron.prototype.train = function(input, desire){
    var guess = this.guess(input)
    var error = desire - guess
    this.errTotal += error
    for(i=0;i<input.length;i++){
      this.weights[i] += error * input[i] * this.lr
    }
    this.biasWeight += error * this.bias * this.lr
  }
  Perceptron.prototype.activate = function(input){
    if(input > 0){
      this.lastOutput = 1
      return 1
    } else {
      this.lastOutput = -1
      return -1
    }
  }
}
