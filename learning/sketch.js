
var part
var entities = new Array;


var maxSpeed=7
var steeringFac= 0.07
var brake = 200

function setup(){
	colorMode(RGB, 255, 255, 255);
	createCanvas(1400, windowHeight - 200)
	background(51)
}


function draw(){
	fill(255)
	stroke(255)
	strokeWeight(6)
	background(51)
	strokeWeight(1)
if(entities.length > 0){
	for (i = 0; i < entities.length; i++){
		// entities[i].applyForce(force)
		entities[i].update()
		entities[i].show()







		if(entities[i].pos.x > width || entities[i].pos.x < 0 || entities[i].pos.y > height || entities[i].pos.y < 0){
			entities.splice(i, 1)
		}
	}
}



}
function mousePressed(){
 entities.push(new Candidate(mouseX, mouseY))
 console.log(entities)
}


function Candidate(x, y){
	this.pos = createVector(x, y)
	// this.acc = createVector(0,0)
	this.vel =  createVector(random(-1, 1),random(-1, 1)).setMag(maxSpeed)
	this.direction;
	this.desire
	this.force

	// this.applyForce = function(force){
	// 	this.acc.add(force)
	// }

	this.update = function(){
		// this.vel.add(this.acc)
		this.pos.add(this.vel)

		this.direction = this.vel.heading()
		this.desireMeta = createVector(mouseX - this.pos.x, mouseY - this.pos.y)
		this.breaker = map(this.desireMeta.limit(brake).mag(), 0, brake, 0 ,1)
		this.desire = createVector(mouseX - this.pos.x, mouseY - this.pos.y).limit(maxSpeed * round(this.breaker * 100) / 100)
		this.force = createVector(this.desire.x - this.vel.x, this.desire.y - this.vel.y)

		console.log(round(this.breaker * 1000) / 1000)
		this.vel.add(this.force.mult(steeringFac))
		// this.acc.mult(0)
	}

this.show = function(){
	push()
	fill(255)


	translate(this.pos.x, this.pos.y)
	stroke(255, 0, 0)
	line(0,0, this.desireMeta.x, this.desireMeta.y)
	stroke(0, 255, 0)
	line(0,0, this.vel.x * 30, this.vel.y * 30)
	stroke(0, 0, 255)
	line(0,0, this.force.x * 30, this.force.y * 30)
	stroke(255, 255, 255)
	rectMode(CENTER)
	rotate(this.direction)
	triangle(-5, -5, 10 ,0 , -5, 5)
	pop()
}


}
