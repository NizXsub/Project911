import React, { useState, useEffect } from 'react';
import Answersheet from './Answersheet';

const MCQPaper = (props) => {
    const [answers, setAnswers] = useState({});
    const [submission, setSubmission] = useState({});
    const [timeLeft, setTimeLeft] = useState(60 * 60); // Set initial time in seconds (e.g., 60 minutes)
    const [timerStarted, setTimerStarted] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        let timer;
        if (timerStarted && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000); // Update every second
        } else if (timeLeft === 0 && !isSubmitted) {
            handleSubmit();
        }
        return () => clearInterval(timer);
    }, [timerStarted, timeLeft, isSubmitted]);

    const handleOptionChange = (event, questionId) => {
        const newAnswers = { ...answers };
        newAnswers[questionId] = event.target.value;
        setAnswers(newAnswers);
        if (!timerStarted) {
            setTimerStarted(true);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        const data = {
            collectionId: props.colId,
            questions: Object.keys(answers).map(questionId => ({
                questionId: parseInt(questionId),
                answer: answers[questionId]
            }))
        };
        console.log(data);
        const iamTeacher = localStorage.getItem(`${props.spaceId}`);
        if (iamTeacher) {
            const confirmwindow = window.confirm("If the Paper is all good, you can return back?");
            if (confirmwindow) {
                window.location.href = `/dashboard/${props.spaceId}/${props.name}`;

            }
        } else {
            if (data.questions.length !== 0) {
                submitAnswers(props.token, data);
            } else {
                alert("Please select the answers first.");
            }
        }
    };

    async function submitAnswers(auth_token, rdata) {
        const res = await fetch(`${props.api}/space/${props.spaceId}/mcq/submit_answersheet/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + auth_token.toString()
            },
            body: JSON.stringify(rdata)
        });

        const data = await res.json();

        if (!res.ok) {
            // alert(data)
        } else {
            setSubmission(data);
            console.log(data);
            localStorage.setItem(`${props.colId}`, JSON.stringify(data));
            window.location.href = `/dashboard/${props.spaceId}/${props.colId}/answersheet`;
        }
    }

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

    // if (isSubmitted) {
    //     return <div>Test submitted. Thank you!</div>;
    // }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className='w-full p-5 h-fit flex flex-col gap-5 items-center'>
            <div className="flex flex-col w-[70%] justify-center items-center gap-5">
                <div>Time left: {formatTime(timeLeft)}</div>
                {props.mcqs.map((mcq, index) => (
                    <div className='w-[70%] flex flex-col p-6 gap-5 justify-center items-left border-2 border-gray-400' key={mcq.questionId}>
                        <div className="ques flex gap-3 items-center w-full">
                            <label>{`${index + 1}. `}{mcq.question}</label>
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
