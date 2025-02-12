import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    answer: "Delhi",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {questions.length}!</h2>
        </div>
      ) : (
        <div className="question-section">
          <h2 className="question-text">{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswer(option)} className="option-button large-button">
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;