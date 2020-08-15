var noOfSquares = 6;
var colors = [];
var picked;
var squares = document.querySelectorAll(".square"); 
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset"); 
var modeButton = document.querySelectorAll(".mode");

start();

function start(){
	//mode button event Listeners
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? noOfSquares = 3: noOfSquares = 6; 
			resets();
		});
	}

	for(var i = 0; i < squares.length; i++) {
	 	//add click listeners to squares
	 	squares[i].addEventListener("click", function() {
	 	// grab color of picked square
	 	var clickedColor = this.style.backgroundColor; 
	 	//compare color to the pickedColor
	 	if(clickedColor === picked){
	 		message.textContent = "Correct!";
	 		reset.textContent = "Play Again!";
	 		changeColors(clickedColor);
	 		h1.style.backgroundColor = clickedColor;
	 	} else {
	 		this.style.backgroundColor = "#232323";
	 		message.textContent = "Try Again!";
	 		}		
		});
	}

	resets();
}


function resets(){
	colors = generateRandomColors(noOfSquares);
	//pick a new random color from the array
	picked = pickColor();
	//change colorDisplay to random picked Color
	colorDisplay.textContent = pickColor();
	reset.textContent = "New Colors";
	message.textContent = "";
	//change color of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){		
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display="none";
		}	
	}
	h1.style.backgroundColor = "steelblue";
}


reset.addEventListener("click", function() {
	resets();
});

function changeColors(color){
//loop through all squares
for(var i = 0; i < squares.length; i++){
	//change each color to the match given color
	squares[i].style.backgroundColor = color; 
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random]; 	
}

function generateRandomColors(num){
//make an array
 var arr = [];
 //add n num of array elements 
for(var i = 0; i < num;i++){ //got an error here 
	//get the random color and push it into the array
	arr.push(randomColor());
 } // return the array
 return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")";
}