function sign(input){
  if(input > 0){
    return(1)
  } else if(input < 0){
    return(-1)
  } else {
    return(0)
  }
}

function createPoint(x,y, res){
  this.show = function(){
    if(res == 1){
      fill(0, 255, 0)
    } else if(res == -1){
      fill(255, 0,0)
    } else {
      fill(0, 0 , 255)
    }
    noStroke()
    ellipse(x, y, 20, 20)
  }
}
