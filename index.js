var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your Name: ");
console.log("Welcome! " + userName +" to the General Science Quiz");
console.log("All the Best");
var score = 0;
function play(question,answer)
  {
    var userAnswer = readlineSync.question(question);
    if(userAnswer === answer){
      console.log("You are right");
      score = score + 1;
      
      
    }else{
      console.log("You are Wrong");
      score = score - 1
    }
  
console.log("Current Score ", score);
console.log("---------------------");
} 
var questions = [questionOne = {
  question: "Which of the following is a non metal that remains liquid at room temperature? A.	Phosphorous  B.	Bromine C.	Chlorine  D.	Helium",
  answer: "Bromine"
},questionTwo = {
  question: "Which of the following is used in pencils?  A.	Graphite	B.	Silicon  C.	Charcoal  D.	Phosphorous",
  answer: "Graphite"
},
questionThree = {
  question: "Which of the following metals forms an amalgam with other metals? A.	Tin  B.	Mercury C.	Lead  D.	Zinc",
  answer: "Mercury"
},
              questionFour = {
                question: "Chemical formula for water is   A.	NaAlO2  B.	H2O  C.	Al2O3  D.	CaSiO3",
                answer: "H2O"
              },
                 questionFive = {
                   question: "	The gas usually filled in the electric bulb is  A.	nitrogen  B.	hydrogen  C.	carbon dioxide  D.	oxygen  ",
                   answer: "nitrogen"
                 },
                 questionSix = {
                   question: "	Washing soda is the common name for  A.	Sodium carbonate  B.	Calcium bicarbonate  C.	Sodium bicarbonate  D.	Calcium carbonate ",
                   answer: "Sodium carbonate"
                 },
                 questionSeven = 
                 {
                   question: "Which of the gas is not known as green house gas?  A.	Methane  B.	Nitrous oxide  C.	Carbon dioxide D.	Hydrogen	",
                 answer: "Hydrogen"
                 },
                 questionEight = {
                   question: "	Bromine is a  A.	black solid  B.	red liquid  C.	colourless gas  D.	highly inflammable gas",
                   answer: "red liquid"
                 },
                 questionNine = {
                   question: "The hardest substance available on earth is  A.	Gold  B.	Iron  C.	Diamond  D.	Platinum",
                   answer: "Diamond"
                 },
                 questionTen = {
                   question: "Heavy water is  A.	deuterium oxide  B.	PH7  C.	rain water  D.	tritium oxide",
                   answer: "deuterium oxide"
                 }               
                
]

for(var i = 0; i < questions.length; i++)
  {
    var currentQuestions = questions[i];
    play(currentQuestions.question, currentQuestions.answer);
  }

 console.log("Yay! You completed the Quiz")