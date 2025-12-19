// ===============================
// Console Based JavaScript Quiz
// ===============================

// Quiz Questions Array
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answer: "paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "mars"
  },
  {
    question: "What is 5 + 7?",
    answer: "12"
  },
  {
    question: "Who is the President of Russia?",
    answer: "vladimir putin"
  },
  {
    question: "Which language is used for web development?",
    answer: "javascript"
  }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // Initialize score

  for (let i = 0; i < quizQuestions.length; i++) {
    // Take user input
    let userAnswer = prompt(quizQuestions[i].question);

    // If user clicks Cancel
    if (userAnswer === null) {
      alert("Quiz cancelled!");
      break;
    }

    // Normalize user input
    userAnswer = userAnswer.toLowerCase().trim();

    // Check answer
    if (userAnswer === quizQuestions[i].answer.toLowerCase().trim()) {
      alert("Correct!");
      score++;
    } else {
      alert(
        "Wrong! Correct answer is: " + quizQuestions[i].answer
      );
    }
  }

  // Show final score
  alert(
    "Quiz Over!\nYour final score is " +
      score +
      " out of " +
      quizQuestions.length
  );
}
