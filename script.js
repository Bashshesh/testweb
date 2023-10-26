// JavaScript for handling quiz navigation
var currentQuestion = 1; // Initialize with the first question

function previousQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function nextQuestion() {
    if (currentQuestion < 10) { // Change to the total number of questions
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function showQuestion(questionNumber) {
    var questions = document.querySelectorAll(".question");

    for (var i = 0; i < questions.length; i++) {
        questions[i].style.display = "none";
    }

    questions[questionNumber - 1].style.display = "block";
}
function submitQuiz() {
        var questions = document.querySelectorAll(".question");
        var allQuestionsAnswered = true;

        for (var i = 0; i < questions.length; i++) {
            var radioButtons = questions[i].querySelectorAll("input[type='radio']");
            var isQuestionAnswered = false;

            for (var j = 0; j < radioButtons.length; j++) {
                if (radioButtons[j].checked) {
                    isQuestionAnswered = true;
                    break;
                }
            }

            if (!isQuestionAnswered) {
                allQuestionsAnswered = false;
                break;
            }
        }

        if (allQuestionsAnswered) {
            var randomNum = Math.floor(Math.random() * 35) + 70;
            alert("Your random number is: " + randomNum);
        } else {
            alert("Please answer all questions before submitting.");
        }
    }


showQuestion(currentQuestion); // Show the first question initially
