// game.js

// Confirm JS is loading
console.log("game.js is loaded!");

// Question counter
var count = 0;

// Multi-dimensional questions array
var questions = [
    ["What is the capital of Texas?", 1, "Houston", "Austin", "Dallas"],
    ["Which language runs in the browser?", 2, "Python", "C++", "JavaScript"],
    ["What does CSS stand for?", 0, "Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"]
];

// Load Play Game button when page loads
window.onload = function () {
    document.getElementById("prompt").innerHTML =
        "<button onclick='playGame()'>Play Game</button>";
};

// Play Game function
function playGame() {
    // Check if there are any questions left
    if (questions.length === 0) {
        document.getElementById("question").innerHTML = "Game Over";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("prompt").innerHTML =
            "<button onclick='location.reload()'>Restart Game</button>";
        return;
    }

    // Increase question counter
    count++;

    // Get first question
    var question = questions[0];

    // Remove question text
    var questionText = question.shift();

    // Remove correct answer index
    var correctIndex = question.shift();

    // Display question
    document.getElementById("question").innerHTML = questionText;

    // Build answers list
    var answerHTML = "";
    for (var i = 0; i < question.length; i++) {
        answerHTML += "<li>";
        answerHTML += "<a href='#' onclick='checkAnswer(" + i + "," + correctIndex + ")'>";
        answerHTML += question[i];
        answerHTML += "</a>";
        answerHTML += "</li>";
    }

    // Display answers
    document.getElementById("answers").innerHTML = answerHTML;

    // Prompt user
    document.getElementById("prompt").innerHTML =
        "<p>Click the best answer.</p>";

    // Remove used question from array
    questions.shift();
}

// Check Answer function
function checkAnswer(choice, correct) {
    if (choice === correct) {
        document.getElementById("prompt").innerHTML =
            "<p>Correct!</p>";
    } else {
        document.getElementById("prompt").innerHTML =
            "<p>Incorrect.</p>";
    }

    // Check if more questions remain
    if (questions.length === 0) {
        document.getElementById("prompt").innerHTML +=
            "<br><button onclick='location.reload()'>Restart Game</button>";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("question").innerHTML = "Game Over";
    } else {
        document.getElementById("prompt").innerHTML +=
            "<br><button onclick='playGame()'>Next Question</button>";
        document.getElementById("answers").innerHTML = "";
    }
}