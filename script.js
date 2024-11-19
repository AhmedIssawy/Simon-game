var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        console.log("wrong");

        // Playing wrong sound
        var wrongSound = new Audio ("https://raw.githubusercontent.com/username/repository/branch/sounds/wrong.mp3");
        wrongSound.play();

        $("body").addClass("game-over");
        setTimeout(() => $("body").removeClass("game-over"), 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();       
    }
}


var levelNum = 0;

function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*buttonColours.length);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    levelNum++;
    
    //adjusting level number
    var level = "Level " + levelNum;
    $("h1").text(level);

    //Flash animation for the chosen button
    $("#" + randomChosenColour).fadeOut(75).fadeIn(75); // RETURN HERE U IDIOT

    
     //return here
};


$(document).ready(function() {
    $(document).one("keypress", function() { // Use .one to bind only once
        nextSequence();
    });
});


$(".btn").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    
    $(this).fadeOut(75);
    $(this).addClass("pressed")
    setTimeout(() => {
        $(this).removeClass("pressed"); 
        $(this).fadeIn(75); 
    }, 75);


    checkAnswer(userClickedPattern.length - 1);

    var sound = new Audio("sounds/" + userChosenColour + ".mp3");
    sound.play();
})

// $(".btn").click(function(){
//     var userChosenColour = this.id;
//     userClickedPattern.push(userChosenColour);
// })


// $("#green").click(function(){
//     var greenSound = new Audio("sounds/green.mp3")
//     greenSound.play();  
// })

// $("#red").click(function(){
//     var redSound = new Audio("sounds/red.mp3")
//     redSound.play();  
// })

// $("#yellow").click(function(){
//     var yellowSound = new Audio("sounds/yellow.mp3")
//     yellowSound.play();  
// })

// $("#blue").click(function(){
//     var blueSound = new Audio("sounds/blue.mp3")
//     blueSound.play();  
// })



function startOver(){
    levelNum = 0;
    gamePattern = [];
    userClickedPattern = [];

    $(document).one("keypress", function(){
        nextSequence();
    });
}


// function levelNumber(){
//     levelNum++;
//     var level = "Level " + levelNum;
//     $("h1").text(level);
// }

    

