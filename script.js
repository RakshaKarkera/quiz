// Quiz data (replace with your own questions and answers)
var quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

var currentQuestion = 0;
var score = 0;

function loadQuestion() {
    var quizContainer = document.getElementById("quiz-container");
    var questionData = quizData[currentQuestion];

    quizContainer.innerHTML = `
        <h2>${questionData.question}</h2>
        <ul>
            ${questionData.options.map(option => `<li><input type="radio" name="answer" value="${option}">${option}</li>`).join('')}
        </ul>
    `;
}

function submitQuiz() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        if (selectedAnswer.value === quizData[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

function showResult() {
    var resultContainer = document.getElementById("result-container");
    if (score === quizData.length) {
        resultContainer.innerHTML = `<p>Congratulations! You answered all questions correctly!</p>`;
    } else {
        resultContainer.innerHTML = `<p>Your score: ${score} out of ${quizData.length}</p>`;
    }
}

// Load the first question on page load
window.onload = loadQuestion;
