// $("#yellow").click( function (){
//     $(this).addClass("pressed");
// });

var buttonColour = ["red","blue","green","yellow"];
var gamePatern = [];


function newSequence () {
    var randomNumber = Math.floor(Math.random() * 5 )+1;
    var randomChosenColour = buttonColour[randomNumber];
    gamePatern = gamePatern + randomChosenColour;
    console.log(gamePatern);



}



