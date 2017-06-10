var arrows = {}
var count = 0
var CanvasWidth 
var CanvasHeight
function setup(){
	createCanvas(800, 400)
	background(51)
	CanvasHeight = height
	CanvasWidth = width
}
function draw(){
	MouseEvent
}
function mouseClicked (){
	var increment = "arrow" + count
	arrows[increment] = 'hell'
	var tri = spawn()
	console.log(arrows)
	count++
}
function spawn(){
	var arrX = Math.round(Math.random() * CanvasWidth)
	var arrY = Math.round(Math.random() * CanvasHeight)
	triangle(arrX - 5, arrY - 5, arrX + 5, arrY - 5, arrX, arrY +5)
	return {arrX, arrY}
}