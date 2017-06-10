function Perceptron(bias){
  this.errTotal = 0
  this.w1 = random(-1,1)
  this.w2 = random(-1,1)
  this.biasWeight = random(-1,1)


  this.bias = bias


  Perceptron.prototype.guess = function(i1,i2){
    var sum;
    sum = i1 * this.w1 + i2 * this.w2 + this.bias * this.biasWeight
    return this.activate(sum)
  }

  Perceptron.prototype.train = function(i1, i2, desire){
    var guess = this.guess(i1,i2, bias)
    var error = desire - guess
    this.errTotal += error
    this.w1 += error * i1 * lr
    this.w2 += error * i2 * lr
    this.biasWeight += error * this.bias * lr
  }

  Perceptron.prototype.activate = function(input){
    if(input >= 0){
      return 1
    } else {
      return -1
    }
  }

}
