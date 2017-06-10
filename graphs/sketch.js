var percentageStep = 0.02
var textOffset = 0.4
var strokeweight = 16
var leftGraphs = new Array()
var rightGraphs = new Array()
var highestPercentage

var graphNo




var data = [
	{name: "Bambi",percentage: Math.round(Math.random() * 100)},
	{name: "Rufl",percentage: Math.round(Math.random() * 100)},
	{name: "Dabum",percentage: Math.round(Math.random() * 100)},
	{name: "sdsddsd",percentage: Math.round(Math.random() * 100)},
	{name: "gggggg",percentage: Math.round(Math.random() * 100)},
	{name: "trtrtrt",percentage: Math.round(Math.random() * 100)},
	{name: "ghhhhh",percentage: Math.round(Math.random() * 100)},
	{name: "Rupi",percentage: Math.round(Math.random() * 100)},
	{name: "Aris",percentage: Math.round(Math.random() * 100)},
	{name: "Bambi",percentage: Math.round(Math.random() * 100)}
]
function preload(){
  loadJSON('https://spreadsheets.google.com/feeds/list/1HxyFfd6aIZtP8eAwnvNxG6VPWvFMZm4FyovQ791av4o/1/public/values?alt=json', function(data) {
      console.log(data.feed)
  });
}
function setup(){
	frameRate(60)
	highestPercentage  = highestVal(data)
	colorMode(HSB, 360, 255, 255)
	createCanvas(windowWidth - 140, windowHeight - 140)
	for(i = 0; i < data.length; i++){
		leftGraphs.push(new bowGraphLeft(data[i].percentage, i , data[i].name, data[i].percentage))
	}
	graphNo = leftGraphs.length
	textAlign(LEFT)
	noFill()

}


	function draw(){

		background(10, 0, 40)
		updateGraphsLeft()
}



function updateGraphsLeft(){
	for(i = 0; i < graphNo; i++){
		if(!leftGraphs[i].complete){
			leftGraphs[i].update()
		}
		leftGraphs[i].show()
	}
}

function highestVal(data){

	var value = 0
	for(i = 0; i < data.length; i++){
		if(data[i].percentage > value){
			value = data[i].percentage
		}
	} return(value)
}

function compare(a,b) {
if (a.percentage < b.percentage)
	return -1;
if (a.percentage > b.percentage)
	return 1;
return 0;
}
