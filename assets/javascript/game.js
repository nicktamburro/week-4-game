
//<!-- <script type="text/javascript">

//$(document).ready(fuction() {

var wins = 0;
var losses = 0;
var counter = 0;
var randomNumberToGuess = [];

function reset(){
		$("#crystal").empty();
		$("#score").empty();
		counter = 0;
		randomNumberToGuess = [];
		if (counter == 0) {
			console.log("it worked")};
		initialize();
}

function initialize(){

	counter = 0;
	//not sure if this should be out or in


	randomNumberToGuess = [Math.floor(Math.random() * 101) + 19];
//console.log(randomNumberToGuess);
	$("#number-to-guess").text(randomNumberToGuess);

//loops through all numberOptions, makes a crystal and a value for each...

	var numberOptions = ["crystal1", "crystal2", "crystal3", "crystal4"];

	for (var i = 0; i < numberOptions.length; i++) {

		var images = ["assets/images/mind.jpg", "assets/images/power.jpg", "assets/images/reality.jpg", "assets/images/soul.jpg", "assets/images/space.jpg", "assets/images/time.jpg"];

		var imageCrystal = $("<img>");
	
//add some CSS for this to do anything...
		imageCrystal.addClass("crystal");
	

//COOL, images are random, now see if we can make them not pick 2 the same in a given round?

        //instead of imageCrystal, assign this to some existing HTML...
        //this line, for each of the 4 crystal HTML spots...
		imageCrystal.attr("src", images[Math.floor(Math.random() * images.length)]);
	

//this gives the crystals a randomly assigned value
		imageCrystal.attr("data-crystalvalue", [Math.floor(Math.random() * 11) + 1]);
		



	imageCrystal.attr[Math.floor(Math.random() * 11) + 1];

//this ACTUALLY adds the crystal images to the page
	$("#crystal").append(imageCrystal);

	//but how to replace them with new ones after a round? I've tried .replaceWith, .html, .insert,
	}
}
//reset();
initialize();
//listens for a click...
//WHAT I ORIGINALLY HAD:
//$(".crystal").on("click", function() {
//AND WHAT WORKS... but why??
//"Delegate you click events, your images are dynamically added"
$('body').on("click",".crystal", function() {

// (this) means "the crystal that you clicked", and the rest pulls the value out of the crystal
//this part works, but I still don't really understand it... READ ABOUT THIS...
	var crystalValue = ($(this).attr("data-crystalvalue"));
	// and this makes it into an integer, but why 
	//wasn't it already an integer?
	crystalValue = parseInt(crystalValue);

//what is  += vs. ++??
	counter += crystalValue;
// here is where we need to have the counter overwrite...

//	alert("You score is " + counter + "!");
//OKAY, this is working, but not ADDING the numbers,
//so I need them to write over the old score each time!
	$("#score").text(counter);

//?? this only worked when I made it == instead of ===, why?
	if (counter == randomNumberToGuess){
		alert("You win!");
		wins++;
		$("#wins").text(wins);
		reset();
		$("#crystal").empty();
		counter = 0;
		initialize();
// KIND OF works, but not awesome...- counter = 0; 	
	}

	else if (counter > randomNumberToGuess) {
		alert("You lose!");
		losses++;
		$("#losses").text(losses);
		reset();
	    $("#crystal").empty();
		counter = 0;
		initialize();
// this KIND OF works to start over...- counter = 0;

//wins & losses is KIND OF working...

//then at the end, need to reset score to 0... and start over for real this time
	}



});