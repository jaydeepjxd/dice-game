
var player1 = Math.floor((Math.random() * 6) + 1);
var player2 = Math.floor((Math.random() * 6) + 1);

var img1 = "images/dice" + player1 + ".png";
var img2 = "images/dice" + player2 + ".png";

document.querySelector(".player1 img").src = (img1);
document.querySelector(".player2 img").src = (img2);


if (player1 > player2)
    {
        document.querySelector("header h1").innerHTML = ("&#x1F3C1 player1 wims");
    }
else if (player1 < player2)
    {
        document.querySelector("header h1").innerHTML = ("player2 wims &#x1F3C1");
    }
else 
    {
        document.querySelector("header h1").innerHTML = ("it's a tie match");
    }
