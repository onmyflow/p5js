function bowGraphLeft (percentage, row, name, increments){
	this.finalPercentage = map(percentage, 0, highestPercentage, 0, 1)
	this.desire = 0
	// colorMode(HSB, 360, 255, 255)
	this.color = color(row * 10, random(230, 255),random(230, 255))
	this.radius = (row * 120) + 100
	this.textVector
	this.complete = false
	this.update = function(){
		if(this.desire <= this.finalPercentage){
			this.desire += percentageStep
			this.textVector = p5.Vector.fromAngle(PI + HALF_PI * this.desire + (textOffset/(this.radius/100))).setMag(this.radius * 0.5)
		} else {
			this.complete = true
		}
	}
	this.show = function(){
		push()
		translate(width - 120, height - 80)
		stroke(this.color)
		noFill()
		strokeWeight(strokeweight * this.finalPercentage * map(this.desire, 0, this.finalPercentage, 0, 1) + 1)
		arc(0, 0, this.radius ,this.radius, PI, PI + HALF_PI * this.desire)
		strokeWeight(1)
		noStroke()

		fill(this.color)
		textSize(14)
		textAlign(LEFT)
		text(name , this.textVector.x, this.textVector.y -  - strokeweight/4)
		ellipse(100, -data.length * 120 * 0.5 + 10, 20, 20)
		textAlign(CENTER)
		text(increments , - this.radius * 0.5, 30 )
		text(round(this.finalPercentage * 100) + "%", - this.radius * 0.5, 55 )
		fill(60, 255,255)
		textAlign(LEFT)
		text("Value" , 0, 30 )
		text("Percentage" , 0, 55 )


		pop()

	}
}
