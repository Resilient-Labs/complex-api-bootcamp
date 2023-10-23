const apiUrl1 =
  "https://opentdb.com/api.php?amount=50&category=14&difficulty=easy&type=multiple";
const apiUrl2 =
  "https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple";

let questions = [];
let currentQuestionIndex = 0;

const startButton = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.style.display = "none";
  quizContainer.style.display = "block";

  // Fetch questions from both APIs and merge them
  Promise.all([fetchQuestions(apiUrl1), fetchQuestions(apiUrl2)])
    .then(mergeQuestions)
    .then(setNextQuestion)
    .catch((error) => console.error("Error fetching questions:", error));
}

function fetchQuestions(apiUrl) {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data.results);
}

function mergeQuestions([questions1, questions2]) {
  questions = [...questions1, ...questions2];
  shuffleArray(questions);
}

function setNextQuestion() {
  if (currentQuestionIndex < 10) {
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    currentQuestionIndex++;
    showAnswers(question);
  } else {
    endQuiz();
  }
}

function showAnswers(question) {
  answersElement.innerHTML = "";
  const allAnswers = [...question.incorrect_answers, question.correct_answer];
  shuffleArray(allAnswers);
  allAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.addEventListener("click", () =>
      checkAnswer(answer, question.correct_answer)
    );
    answersElement.appendChild(button);
  });
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Wrong! The correct answer is: " + correctAnswer);
  }
  setNextQuestion();
}

function endQuiz() {
  questionElement.innerText = "Quiz completed!";
  answersElement.innerHTML = "";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
