let buttonColours = ["red", "blue", "green", "yellow"]; // Possible colours
let gamePattern = [];									// Saved randomed colours shown to user
let userClickedPattern = [];							// User picker colour
let level = 0;

//-------------------------HANDLERS----------------------------//

$(document).keydown(function(event) {
	// Handler for start game by pressing any key
	if (gamePattern.length === 0) {
		nextSequence();
		$("h1").text("Level 0");
	}
});

$("div.btn").click(function () {
	// Handler for get id of pressed button and play sound & animate
	let userChosenColour = $(this).attr('id');
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);

	// Check check answer
	// checkAnswer(userClickedPattern.length - 1);
	// console.log(userClickedPattern);
})

//--------------------FUNCTIONS------------------------//

// function checkAnswer(currentLevel) {
// 	if (currentLevel === gamePattern[-1]) {
// 		console.log("success");
// 		setTimeout(nextSequence(), 1000);
// 	}
// 	else
// 		console.log("fail") && playSound("wrong");
// }

function nextSequence() {
	// userClickedPattern = []
	// Get random colour
	let randomNumber = Math.floor((Math.random() * 4));
	let randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);

	// Animate and play sound while showing next button to press
	$("#" + randomChosenColour).fadeOut(150).fadeIn(150);
	playSound($("#" + randomChosenColour).attr('id'));

	// Update level on every sequence
	$("h1").text("Level "+ level);
	level++;

	// console.log(gamePattern);
}

function animatePress(currentColour) {
	// Animate user-pressed click on buttons with adding class and removing it later
	$("#" + currentColour)[0].classList.add("pressed");

	setTimeout(function() {
		$("#" + currentColour)[0].classList.remove("pressed");
	}, 100);
}

function playSound(name) {

	// Play different melody on different press
	switch (name) {
		case "green":
			let audioGreen = new Audio("sounds/green.mp3");
			audioGreen.play();
			break;
		case "yellow":
			let audioYellow = new Audio("sounds/yellow.mp3");
			audioYellow.play();
			break;
		case "blue":
			let audioBlue = new Audio("sounds/blue.mp3");
			audioBlue.play();
			break;
		case "red":
			let audioRed = new Audio("sounds/red.mp3");
			audioRed.play();
			break;
		default:
			let audioErr = new Audio("sounds/wrong.mp3");
			audioErr.play();
			break
	}
}
