function sign(input){
  if(input > 0){
    return(1)
  } else {
    return(-1)
  }
}

function pointN(){
  this.x = random(width)
  this.y = random(height)
  this.label = 0
  if(this.x > this.y){
    this.label = 1
  } else {
    this.label = -1
  }
  this.show = function(){
    if(this.label == 1){
      fill(0, 255, 0)
    } else {
      fill(255, 0,0)
    }
    ellipse(this.x, this.y, 20, 20)
  }
}
