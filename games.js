var buttonColour = ["red", "blue", "green", "yellow"];
var gamePatern = [];
var myPatern = [];


$("body").one("click",function() {
    newSequence();
});




function newSequence() {
    setTimeout(function () {
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColour[randomNumber];
        gamePatern.push(randomChosenColour);
        
        new Audio("sounds/"+randomChosenColour+".mp3").play();
        $("#" + randomChosenColour).addClass("pressed");
        setTimeout(function () {
            $("#" + randomChosenColour).removeClass("pressed");
        }, 1000);
    }, 2000);
}

for (let i = 0; i < 4; i++) {
    $("#" + buttonColour[i]).click(function () {
        myPatern.push(buttonColour[i]);
        $(this).addClass("pressed");
        new Audio("sounds/"+buttonColour[i]+".mp3").play();
        setTimeout(() => {
            $(this).removeClass("pressed");
        }, 1000);

        checkAnswer();
    });
}

function checkAnswer() {
    if (gamePatern.length == myPatern.length) {
        if (arraysEqual(gamePatern, myPatern)) {
            myPatern = [];
            newSequence();
        } else {
            new Audio("sounds/wrong.mp3").play();
            myPatern = [];
            gamePatern = [];
            $("body").addClass('game-over');
            $("#level-title").text("Game Over");
            setTimeout(() => {
                $("body").removeClass("game-over");
                $("#level-title").text("Press A key to Start");
            }, 1000);
            
            setTimeout(() => {
                $("body").one("click",function() {
                    newSequence();
                });
            }, 1000);

        }
    }
    else if (myPatern.length> gamePatern.length){
        myPatern = [];
        gamePatern = [];
        $("body").addClass('game-over');
        $("#level-title").text("Game Over");
        setTimeout(() => {
            $("body").removeClass("game-over");
            $("#level-title").text("Press A key to Start");
        }, 1000);
        
        setTimeout(() => {
            $("body").one("click",function() {
                newSequence();
            });
        }, 1000);

    }
}



function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}









