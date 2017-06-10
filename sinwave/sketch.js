var stepSize = 0.005
var amp = 60
var step = Math.random() * 2
var stretch = 0.1
var y = 0
var resolution = 100
var segWidth
var OverYarr = new Array();
var yarr = new Array();

var waveWeight = 8
var hueDeg = Math.random() * 360
var hueStep = 0.1
var hue

var mic

var background = 40

var timerH = 0
var timerM = 0
var timerS = 0

function setup() {
	strokeCap(SQUARE);
	strokeJoin(MITER)
	colorMode(RGB, 255);
	createCanvas(windowWidth, windowHeight)
	background(40)
	noFill()
	colorMode(HSB, 360, 100, 100);
	segWidth = (windowWidth - waveWeight) / resolution
	strokeJoin(MITER);
	strokeCap(PROJECT);
}

function draw() {
	noFill()
	colorMode(RGB, 255)
	background(51)
	colorMode(HSB, 360, 100, 100);
	hueDeg += hueStep
	strokeWeight(10)
	stroke(hueDeg, 100, 100)
	step += stepSize
	calcSin(60, step * 1.1, 0.06, resolution, -300)
	calcSin(60, step * 1.4, 0.06, resolution, -150)
	calcSin(60, step * -2, 0.06, resolution)
	calcSin(60, step * 0.7, 0.06, resolution, +150)
	calcSin(60, step * -1, 0.06, resolution, +300)
	
	strokeWeight(8)
	beginShape()
	endShape(CLOSE)
	strokeWeight(waveWeight)
	renderWave()
	if (hueDeg >= 360) {
		hueDeg = 0
	}
	strokeWeight(1)
	textSize(20)
	/*text(round(frameRate()), 25, 30)*/
	OverYarr = []
	yarr = []
	noStroke()
	fill(0, 0, 0, 0.8)
	var rec = rect(width / 4, height / 4, width / 2, height / 2, 10)
	fill(255)
	textAlign(CENTER)
	textSize(100)
	text(nulling(hour()) + ":" + nulling(minute()) + ":" + nulling(second()), width / 4, height / 2 - 200, width / 2, 200)
	textSize(30)
	fill(60)
	text(day() + " - " + month() + " - " + year(), width / 4, height / 2 - 100, width / 2, 200)
	colorMode(RGB, 255, 255, 255, 1)
	fill(10, 10, 10, 0.8)
	var timer = rect(width / 4, height / 2, width / 2, height / 4, 10)
	fill(255)
	textSize(100)
	text(nulling(timerH) + ":" + nulling(timerM) + ":" + nulling(timerS), width / 4, height / 2 + 60, width / 2, 200)
	fill(50, 150, 200)
	var start = rect(width / 4 + 30, height / 2 + 65, 200, 100, 10)
	var reset = rect(width / 4 * 3 - 230, height / 2 + 65, 200, 100, 10)
}


function renderWave(contours = true) {
	for (i = 0; i < OverYarr.length; ++i) {
		beginShape()
		if (contours) {
			if (i == 0) {
				vertex(width - (waveWeight / 2), (waveWeight / 2))
				vertex((waveWeight / 2), (waveWeight / 2))
			} else if (i == OverYarr.length - 1) {

				vertex(width - (waveWeight / 2), height - (waveWeight / 2))
				vertex((waveWeight / 2), height - (waveWeight / 2))
			} else {

			}
		}
		for (var x = 0; x < OverYarr[i].length; x++) {
			vertex(segWidth * (x) + waveWeight / 2, windowHeight / 2 + OverYarr[i][x]);
		}
		if ((i == 0 || i == OverYarr.length - 1) && contours) {
			endShape(CLOSE)
		} else {
			endShape()
		}

	}
}

function calcSin(amp, step, stretch, res, yOffset = 0, type = "line") {
	yarr = []
	for (var i = 0; i <= res; i++) {
		yarr[i] = Math.round(((sin(i * stretch + step) * amp) + yOffset) * 1000) / 1000
	}
	OverYarr.push(yarr)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	segWidth = (windowWidth - waveWeight) / resolution
}
function nulling(val){
	if(val <= 9){
		val = "0" + val
	}
	return val
}
	

