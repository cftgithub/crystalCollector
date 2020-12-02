// computer generate random number (19-120) and append to html #randomNumber
// gems 1-4 will be assigned random number
// on.click event for each gem, push number to array and add to number
// value for each gem (1-12) and are all different
// append new number to html #pointsTotal

// win if #randomNumber === #pointsTotal, append win to html #winCount
// reset #pointsTotal, go back to 1
// lost if #randomNumber < #pointsTotal, append loss to html #lossCount
// go back to 1

// function to get point value for gem clicked
// $("p").on("click", function(){
//     $(this).hide();
//   });   
$(document).ready(function () {

    var randomNumber; //computer generated number
    var gameTotal = 0;
    var wins = 0;
    var losses = 0;

    function startGame() {

        randomNumber = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").html(randomNumber);
        $("#pointsTotal").html(gameTotal);

        console.log(randomNumber);

        gem1 = Math.floor(Math.random() * 12) + 1;
        gem2 = Math.floor(Math.random() * 12) + 1;
        while (gem2 === gem1) {
            gem2 = Math.floor(Math.random() * 12) + 1;
        }
        gem3 = Math.floor(Math.random() * 12) + 1;
        while ((gem3 === gem1) || (gem3 === gem2)) {
            gem3 = Math.floor(Math.random() * 12) + 1;
        }
        gem4 = Math.floor(Math.random() * 12) + 1;
        while ((gem4 === gem1) || (gem4 === gem2) || (gem4 === gem3)) {
            gem4 = Math.floor(Math.random() * 12) + 1;
        }
        console.log(gem1, gem2, gem3, gem4);
    }

    startGame();

    $("#gem1").click(function () {
        gameTotal = gem1 + gameTotal;
        document.getElementById("pointsTotal").innerHTML = gameTotal;
        console.log(gameTotal);
        gameResult();
    });
    $("#gem2").click(function () {
        gameTotal = gem2 + gameTotal;
        document.getElementById("pointsTotal").innerHTML = gameTotal;
        console.log(gameTotal);
        gameResult();
    });
    $("#gem3").click(function () {
        gameTotal = gem3 + gameTotal;
        document.getElementById("pointsTotal").innerHTML = gameTotal;
        console.log(gameTotal);
        gameResult();
    });
    $("#gem4").click(function () {
        gameTotal = gem4 + gameTotal;
        document.getElementById("pointsTotal").innerHTML = gameTotal;
        console.log(gameTotal);
        gameResult();
    });

    function gameResult() {

        if (randomNumber === gameTotal) {
            setTimeout(function () { alert("You Win!!! Play again?") }, 10);
            wins = wins + 1;
            document.getElementById("winCount").innerHTML = wins;
            gameTotal = 0;
            setTimeout(function () { startGame() }, 11);
        } else if
            (randomNumber < gameTotal) {
            setTimeout(function () { alert("You collected too many Crystal Points!!! Try again?" ) }, 10);
            losses = losses + 1;
            document.getElementById("lossCount").innerHTML = losses;
            gameTotal = 0;
            setTimeout(function () { startGame() }, 11);
        }
    }
});