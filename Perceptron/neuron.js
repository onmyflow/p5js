function Perceptron(bias = 1, lr = 0.1, count = 2){
  this.errTotal = 0
  this.weight = []
  this.biasWeight = random(-1,1)
  this.lr = lr
  this.bias = bias
  for(i = 0; i < count; i++){
    this.weight[i] = random(-1,1)
  }
  console.log(this.weight)

  Perceptron.prototype.guess = function(input){
    var sum = 0;
    for(i=0; i< input.length; i++){
      sum += input[i] * this.weight[i]
    }
    sum += this.bias * this.biasWeight
    // console.log(sum)
    return this.activate(sum)
  }
  Perceptron.prototype.train = function(input, desire){
    var guess = this.guess(input)
    var error = desire - guess
    this.errTotal += error
    for(i=0;i<input.length;i++){
      this.weight[i] += error * input[i] * this.lr
    }
    this.biasWeight += error * this.bias * this.lr
  }
  Perceptron.prototype.activate = function(input){
    if(input >= 0){
      return 1
    } else {
      return -1
    }
  }
}
