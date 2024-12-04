const questions = [
    { 
        question: "If you heat water to 100°C, it boils.", 
        answer: "Zero Conditional", 
        hint: "This conditional talks about general truths or scientific facts."
    },
    { 
        question: "If I study, I will pass the exam.", 
        answer: "First Conditional", 
        hint: "This conditional refers to a real possibility in the future."
    },
    { 
        question: "If I won the lottery, I would travel the world.", 
        answer: "Second Conditional", 
        hint: "This conditional expresses a hypothetical situation in the present or future."
    },
    { 
        question: "If I had studied, I would have passed the exam.", 
        answer: "Third Conditional", 
        hint: "This conditional talks about an unreal past and its hypothetical result."
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");
const startButton = document.getElementById("start");
const hintElement = document.getElementById("hint");
const hintButton = document.getElementById("hintButton");

function startGame() {
    currentQuestion = 0;
    score = 0;
    hintElement.textContent = "Hint: Click the button for help!";
    showQuestion();
    scoreElement.textContent = `Score: ${score}`;
    feedbackElement.textContent = "";
    answerInput.value = "";
    answerInput.disabled = false;
    submitButton.disabled = false;
    hintButton.disabled = false;
}

function showQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    hintElement.textContent = "Hint: Click the button for help!";
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = `Incorrect! The correct answer was: ${questions[currentQuestion].answer}`;
        feedbackElement.style.color = "red";
    }
    scoreElement.textContent = `Score: ${score}`;
    answerInput.value = "";
    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(() => {
            feedbackElement.textContent = "";
            showQuestion();
        }, 2000);
    } else {
        setTimeout(() => {
            questionElement.textContent = "Game Over! Press Start to play again.";
            feedbackElement.textContent = `Final Score: ${score}/${questions.length}`;
            answerInput.disabled = true;
            submitButton.disabled = true;
            hintButton.disabled = true;
        }, 2000);
    }
}

function showHint() {
    hintElement.textContent = questions[currentQuestion].hint;
}

submitButton.addEventListener("click", checkAnswer);
startButton.addEventListener("click", startGame);
hintButton.addEventListener("click", showHint);
