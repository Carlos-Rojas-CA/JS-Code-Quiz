var questionEl = document.getElementById('question');
var startButton = document.getElementById('start');
var detailsEl = document.getElementById('details');
var highScoreEl = document.getElementById('high-scores')
var timerEl = document.getElementById('timer')
var answerListEl = document.getElementById('answer-list')
var questionNumber = 0 ;
var answer = "";
var elementAnswer
var corret = 0;
var wrong = 0;
var begin = 0;
var i = 0;
var scoreNum;
var scoreLog;
var secondsLeft = 5;
var interval;

startButton.addEventListener("click", startQuiz)
// answerListEl.addEventListener("click", quiz(event))

function startQuiz(){

  interval = setInterval(function(){
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
    stopQuiz();
  }, 1000)
}

function stopQuiz() {
  if(secondsLeft === 0){
    clearInterval(interval);
  }
}

function storeHS() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("Score", JSON.stringify(scoreLog));
}

// startButton.addEventListener("click", function(event) {
//     elementAnswer = event.target;
//     console.log(elementAnswer.getAttribute("id"));
//     console.log(answer)
//     if(questionNumber<questions.length && elementAnswer.matches("button") === true){
//       startQuiz();

//     }

//   });

// function startQuiz(event){

//   interval = setInterval(function)
//     questionEl.textContent = questions[questionNumber].title;
//     detailsEl.textContent = "";
//     answerListEl.setAttribute('class', 'list-group')
//     answerListEl.innerHTML = "";
//     if(questionNumber< questions.length){
//       for(i = 0; i < questions[questionNumber].choices.length; i++){
//         var questionBtn = document.createElement("button");
//         questionBtn.setAttribute("class", "btn btn-warning list-group-item");
//         questionBtn.setAttribute("id", i);
//         questionBtn.textContent = questions[questionNumber].choices[i];
//         var newListItem = document.createElement('li');
//         newListItem.appendChild(questionBtn);
//         answerListEl.appendChild(newListItem);
//       }

    
//     } 
//     answer = questions[questionNumber].answer
//     questionNumber++;
//   // }
//   }