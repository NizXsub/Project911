import React from 'react';
import MCQPaper from './MCQpaper';

const mcqs = [
    {
        "questionId": 1,
        "collectionId": 1,
        "question": "What is the capital of France?",
        "options": {
            "option1": "Paris",
            "option2": "London",
            "option3": "Berlin",
            "option4": "Madrid"
        }
    },
    {
        "questionId": 2,
        "collectionId": 1,
        "question": "What is the largest planet in our solar system?",
        "options": {
            "option1": "Earth",
            "option2": "Jupiter",
            "option3": "Mars",
            "option4": "Venus"
        }
    }
];

const MCQRender = () => {
    return (
        <div>
            <MCQPaper mcqs={mcqs} />
        </div>
    );
};

export default MCQRender;
