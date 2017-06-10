var arr = new Array
var bez = new Array
function setup () {
	
}

function draw () {
	beginShape()
	sinCalc ()
	sinDraw()
}
function sinCalc (){
	for(i = 0; i <= 200; i++){
		arr[i] = sin(i)
	}
}
function sinDraw(){
	vertex(0,arr[0])
	for(i = 0; i <= arr.length; i++){
		bez.push(i)
		bez.push(arr[i])
		bezierVertex(i, arr[i], i)
	}
	endShape()
}