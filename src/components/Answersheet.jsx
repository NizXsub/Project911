import React from 'react';
import { useParams } from 'react-router-dom';

const Answersheet = () => {
    const {colId} = useParams()
    const submissionText = localStorage.getItem(`${colId}`)
    const submission = JSON.parse(submissionText)
    console.log(submission)

    const { collection, obtained_marks, questions, remark } = submission;
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4">{collection.name}</h1>
        <p className="mb-2">Description: {collection.description || 'No description provided.'}</p>
        <p className="mb-2">Total Marks: {collection.marks}</p>
        <p className="mb-2">Pass Marks: {collection.pass_marks}</p>
        <p className="mb-2">Time: {collection.time_in_minutes} minutes</p>
        <p className="mb-2">Obtained Marks: {obtained_marks}</p>
        <p className="mb-4 font-bold">Remark: {remark}</p>
        
        <div>
          {questions.map((question, index) => (
            <div key={question.questionId} className="mb-6 p-4 border-b">
              <h2 className="text-lg font-semibold mb-2">
                {index + 1}. {question.question}
              </h2>
              <ul className="mb-2">
                {Object.entries(question.options).map(([key, option]) => (
                  <li key={key} className="mb-1">
                    {option} {option === question.correct_answer ? (
                      <span className="text-green-600 font-bold"> (Correct)</span>
                    ) : option === question.chosen_answer ? (
                      <span className="text-red-600 font-bold"> (Your Answer)</span>
                    ) : ''}
                  </li>
                ))}
              </ul>
              <p>
                Correct Answer: <span className="text-green-600">{question.correct_answer}</span>
              </p>
              <p>
                Your Answer: <span className={`font-bold ${question.correct_answer === question.chosen_answer ? 'text-green-600' : 'text-red-600'}`}>
                  {question.chosen_answer}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answersheet;
