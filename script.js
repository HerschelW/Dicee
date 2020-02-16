var a = Math.random();
var a = a*6;
var a = Math.floor(a) + 1;
console.log(a);



var b = Math.random();
var b = b*6;
var b = Math.floor(b) + 1;
console.log(b);


if (a>b) {
    document.getElementById("refresh").innerHTML = "🚩 Player 1 Wins!";
}   else if (b>a) {
    document.getElementById("refresh").innerHTML = "Player 2 Wins! 🚩";
}   else {
    document.getElementById("refresh").innerHTML = "Tie!";
}

if (a == 1) {
    document.getElementById("img1").src = "images/dice1.png";
}   else if (a == 2) {
    document.getElementById("img1").src = "images/dice2.png";
}   else if (a == 3) {
    document.getElementById("img1").src = "images/dice3.png";
}   else if (a == 4) {
    document.getElementById("img1").src = "images/dice4.png";
}   else if (a == 5) {
    document.getElementById("img1").src = "images/dice5.png";
}   else {
    document.getElementById("img1").src = "images/dice6.png";
} 

if (b == 1) {
    document.getElementById("img2").src = "images/dice1.png";
}   else if (b == 2) {
    document.getElementById("img2").src = "images/dice2.png";
}   else if (b == 3) {
    document.getElementById("img2").src = "images/dice3.png";
}   else if (b == 4) {
    document.getElementById("img2").src = "images/dice4.png";
}   else if (b == 5) {
    document.getElementById("img2").src = "images/dice5.png";
}   else {
    document.getElementById("img2").src = "images/dice6.png";
}