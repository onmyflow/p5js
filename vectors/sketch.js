var gravity
var v1
var part
var particlesArr = new Array;
var d
var mousePress
var mouseStartX
var mouseStartY
var mouseStopX
var mouseStopY

var dampening = 0.995

function setup(){
	v1 = createVector(0,0)
	createCanvas(1400, 800)
	background(51)
	gravity = createVector(0, 0.1)
	mouseStart = createVector(0,0)
	mouseStop = createVector(0,0)
}
function draw(){
	fill(255)
	stroke(255)
	strokeWeight(6)
	background(51)
	if(particlesArr.length > 0){
		for (var i = 0; i < particlesArr.length; i++){
			particlesArr[i].applyForce(gravity, createVector(0, -0.1))
			particlesArr[i].update()
			particlesArr[i].show()
			if(particlesArr[i].pos.x > width || particlesArr[i].pos.x < 0){
				particlesArr[i].vel.x = particlesArr[i].vel.x * -1
			}
			if(particlesArr[i].pos.y >= height){
				particlesArr[i].vel.y = particlesArr[i].vel.y * -1
				// particlesArr.splice(i, 1)
			}
			if(particlesArr[i].pos.y > height + 5){

				articlesArr.splice(i, 1)
			}
		}
	}
	strokeWeight(2)
	if(mousePress){
		line(mouseStartX, mouseStartY, mouseX, mouseY)
	}
	// particlesArr[0].applyForce(gravity)
	// particlesArr[0].update()
	// particlesArr[0].show()

}
function mousePressed(){
	mousePress = true
	mouseStartX = mouseX
	mouseStartY = mouseY


	// particlesArr.push(new Particle(mouseX, mouseY))
	console.log(particlesArr)
}
function mouseReleased(){
	mousePress = false
	mouseStopX = mouseX
	mouseStopY = mouseY
	catapult = createVector(mouseStopX - mouseStartX, mouseStopY - mouseStartY).mult(0.05)
	particlesArr.push(new Particle(mouseStartX, mouseStartY, catapult))
	console.log(catapult)

}



function Particle(x, y, direction){
	this.pos = createVector(x, y)
	this.acc = createVector(0,0)
	this.vel =  createVector(0,0).add(direction)

	this.applyForce = function(gravity, direction){
		// (this.acc.mult(10).add(direction) * 10) /10;
		(this.acc.mult(10).add(gravity) * 10) /10;

	}

	this.update = function(){
		this.vel.add(this.acc).mult(dampening)
		this.pos.add(this.vel)
		this.acc.mult(0)
	}

this.show = function(){
	point(this.pos.x, this.pos.y)
}


}
