var video;
var radiusStep = 2
var circles = []
var xSin
var ySin
var sinStep = 0.01
var toggle = true
var hueStep = 0.1
var hueVal = 1
var drawCircle = 0
function setup() {
createCanvas(windowWidth- 40, 800)
xSin = 0
ySin = HALF_PI
strokeWeight(5)
console.log(circles)
}

function draw() {
  drawCircle++
  xSin += sinStep
  ySin += sinStep
  translate(width/2, height/2)

  if(drawCircle == 20){
    circles.push(new Circle(sin(xSin) * 200, sin(ySin) * 200, 50))
    drawCircle = 0
  }
  toggle != toggle
background(10)
colorMode(HSB)
hueVal += hueStep
// noFill()
fill(10)
for(i = 0; i < circles.length; i++){
  var rad = circles[i].update()
  circles[i].show()
  if(rad > width){
    circles.splice(i, 1)
  }
}

}

function Circle(x, y, rad){
  this.radius = rad
  this.xpos = x
  this.ypos = y
  this.radiusStep = radiusStep
  this.color = color(hueVal, 255, 255)

  this.update = function(){
    this.radius += this.radiusStep
    return(this.radius)
  }
  this.show = function(){
    stroke(this.color)
    ellipse(this.xpos, this.ypos, this.radius, this.radius)
  }
}

function mousePressed(){
    circles.push(new Circle(mouseX - width/2, mouseY - height/2, 50))
}
