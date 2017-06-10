var slider
var graph;
var hspace
var vspace
var canvas
var rowNum = 10;
var colNum = 50;
var p = 0
function setup() {
 	canvas = createCanvas(800, 400);
	background(51)
	slider = createSlider(0, 255, 0)
	graph = createGraphics(width - 100,height - 100);
	graph.parent("scroll");
	graph.background(91)
	graph.stroke(150)
	frameRate(5)
	vspace =  ((graph.height - 10) / rowNum )
	for(i=0; i <= 10; i++){
		graph.line(0, (vspace) * i + 5, graph.width, (vspace)* i + 5);
		fill(255)
		/*graph.text(i + " users", 0, graph.height - (space * i) + 10);*/
		
	}
	hspace =  colNum
	for(i=0; i <= 40; i++){
		graph.line(hspace * i, 0, hspace * i, graph.height);
		fill(255)
		/*graph.text(i + " users", 0, graph.height - (space * i) + 10);*/
		
	}
	graph.stroke(255)
	graph.strokeWeight(3)
	graph.line(1 ,0, 1, graph.height)
	graph.line(0 ,graph.height - 2, graph.width, graph.height - 2)
	graph.beginShape()
	
	
	
}

function draw() {
	
	if(slider.value() > 40){
		var u = randomGaussian(6)
		var val = vspace * Math.floor(u)
		
		graph.noFill();
		
		graph.vertex(p * colNum, val + 5)
		
		
		graph.endShape()
		graph.fill(29, 233, 182)
		graph.noStroke()
		graph.ellipse(p * colNum , val + 5, 15, 15)
		graph.stroke(255)
		graph.noFill()
		console.log(Math.round(u))
		p ++
	}
	
	image(graph, 80, 50);
	
}