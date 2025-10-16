// components/QuizComponent.js
"use client";

import { useState } from 'react';

export default function QuizComponent({ questions }) {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerSelect = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option,
    });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore((correctAnswers / questions.length) * 100);
  };

  if (score !== null) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-xl">Your Score: <span className="font-bold text-blue-600">{score.toFixed(0)}%</span></p>
        {score >= 80 ? (
          <p className="mt-4 text-green-600">Congratulations! You have passed and earned a certificate.</p>
        ) : (
          <p className="mt-4 text-red-600">You did not pass. Please review the course material and try again.</p>
        )}
        <button onClick={() => { setScore(null); setAnswers({}); }} className="mt-6 bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg hover:bg-black">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {questions.map((q, index) => (
        <div key={index} className="mb-8 pb-8 border-b">
          <h3 className="text-xl font-semibold mb-4">{index + 1}. {q.question}</h3>
          <div className="space-y-3">
            {q.options.map((option) => (
              <div
                key={option}
                onClick={() => handleAnswerSelect(index, option)}
                className={`p-3 rounded-lg border-2 cursor-pointer ${
                  answers[index] === option ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
        Submit Quiz
      </button>
    </div>
  );
}