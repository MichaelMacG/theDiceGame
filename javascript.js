var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "images/dice" + randomNum1 + ".png" 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice1);

var randomNum2 = Math.floor(Math.random()* 6) + 1; 
var randomDice2 = "images/dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice2);

if (randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = " 🤩 " + " " + " Player 1 Wins!" + " 🤩";
}else if (randomNum2 > randomNum1){
  document.querySelector("h1").innerHTML = " 🎉 " + " " + " Player 2 Wins!" + " 🎉";
} else{
  document.querySelector("h1").innerHTML = " 😒 Draw 😒 ";
  document.querySelector("h2").innerHTML = "What?! Refresh again.. it's a draw!" 
}
