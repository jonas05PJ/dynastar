
let togg2 = document.getElementById("togg2");
let quizheader = document.getElementById("quizheader");
togg2.addEventListener("click", () => {
  if(getComputedStyle(quizheader).display != "none"){
    quizheader.style.display = "none";
    ask.style.display = "none";
  } 
});
var button = document.getElementsByID('togg2');
var ask = document.getElementById("ask");
button.addEventListener("click", function () {
  ask.style.display = none;
});
const quizData = [
    {
        question: "Quelle est la température moyenne de la terre?",
        a:"37"
    }
]