import React, { useState } from 'react';

const MCQPaper = ({ mcqs }) => {
    const [answers, setAnswers] = useState({});

    const handleOptionChange = (event, questionId) => {
        const newAnswers = { ...answers };
        newAnswers[questionId] = event.target.value;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        const data = {
            collectionId: 1,
            questions: Object.keys(answers).map(questionId => ({
                questionId: parseInt(questionId),
                answer: answers[questionId]
            }))
        };
        console.log(data);
        // Here you can do whatever you want with the data, like submitting it to a server.
    };

    const renderOptions = (options, questionId) => {
        return Object.keys(options).map((optionKey, index) => (
            <div key={index}>
                <label className='flex gap-2 items-center'>
                    <input
                        type="radio"
                        value={options[optionKey]}
                        checked={answers[questionId] === options[optionKey]}
                        onChange={(event) => handleOptionChange(event, questionId)}
                    />
                    {" "}
                    {options[optionKey]}
                </label>
            </div>
        ));
    };

    return (
        <div className='w-full p-5 h-fit flex flex-col gap-5 items-center'>
            <div className="flex flex-col w-[70%] justify-center items-center gap-5">
                {mcqs.map((mcq,index) => (
                    <div className='w-[70%] flex flex-col p-6 gap-5 justify-center items-left border-2 border-gray-400' key={mcq.questionId}>
                        <div className="ques flex gap-3 items-center w-full">
                            <label>{`${index+1}. `}{mcq.question}</label>
                        </div>
                        <div className="options">
                            {renderOptions(mcq.options, mcq.questionId)}
                        </div>
                    </div>
                ))}
                <button className='bg-[#76FF7A] text-black font-bold text-[1.2rem] h-[2.5rem] w-[7rem] border-[1px] border-solid hover:border-2 hover:border-black' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default MCQPaper;
