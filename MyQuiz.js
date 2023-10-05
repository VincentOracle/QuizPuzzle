const MyNum1 = Math.ceil(Math.random() * 10);
const MyNum2 = Math.ceil(Math.random() * 10);

const QuizEl = document.getElementById("question");

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("scores");
const correctAnswer = document.getElementById("correct_ans");

let scores = JSON.parse(localStorage.getItem("scores"));
// let correctAnswer = JSON.parse(localStorage.getItem("CorrectAns"));
if (!scores) {
    scores = 0;
}
QuizEl.innerText = `What is ${MyNum1} Multiplied by ${MyNum2}?`

const CorrectAns = MyNum1 * MyNum2
correctAnswer.innerText = CorrectAns;
scoreEl.innerText = `Total Scores: ${scores}`;
//correctAnswer.innerText = `Correct Answer : ${CorrectAns}`;

formEl.addEventListener("submit", () => {
    const childAnswer = +inputEl.value
    if (childAnswer == CorrectAns) {
        scores++;
        updateLocalStorage()
    }
    else {
        scores--;
        updateLocalStorage()
    }

});
function updateLocalStorage() {
    localStorage.setItem("scores", JSON.stringify(scores));
}
//function correctAnswer() {
// localStorage.setItem("CorrectAns", JSON.stringify(CorrectAns));
//}

//correctAnswer();