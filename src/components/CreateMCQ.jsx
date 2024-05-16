import React, { useState } from 'react';
import { IoAdd } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import {api} from './variables.js'

const CreateMCQ = () => {
    const token = localStorage.getItem("auth_token");
    const {spaceId} = useParams();
    const {colId} = useParams();

    const [mcqs, setMcqs] = useState([
        { question: "", options: ["", ""], correctAnswer: "" }
    ]);

    const handleQuestionChange = (event, index) => {
        const updatedMcqs = [...mcqs];
        updatedMcqs[index].question = event.target.value;
        setMcqs(updatedMcqs);
    };

    const handleOptionChange = (event, mcqIndex, optionIndex) => {
        const updatedMcqs = [...mcqs];
        updatedMcqs[mcqIndex].options[optionIndex] = event.target.value;
        setMcqs(updatedMcqs);
    };

    const handleCorrectAnswerChange = (event, index) => {
        const updatedMcqs = [...mcqs];
        updatedMcqs[index].correctAnswer = event.target.value;
        setMcqs(updatedMcqs);
    };

    const addOption = (index) => {
        const updatedMcqs = [...mcqs];
        const numOptions = updatedMcqs[index].options.length;
        if (numOptions < 4) {
            updatedMcqs[index].options.push("");
            setMcqs(updatedMcqs);
        }
    };

    const addMcq = () => {
        setMcqs([...mcqs, { question: "", options: ["", ""], correctAnswer: "" }]);
    };

    const handleSubmit = () => {
        const data = {
            collectionId: colId,
            questions: mcqs.map(mcq => {
                const questionData = {
                    question: mcq.question
                };
                mcq.options.forEach((option, index) => {
                    questionData[`option${index + 1}`] = option;
                });
                questionData.correct_answer = mcq.correctAnswer;
                return questionData;
            })
        };
        console.log(data);
        createQuestions(token, data)
        // Here you can do whatever you want with the data, like submitting it to a server.
    };



    async function createQuestions(auth_token, rdata){
        // const res = await fetch("https://homework-collab-production.up.railway.app/space/create_space/",{
          const res = await fetch(`${api}/space/${spaceId}/mcq/create_question/`,{
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token "+ auth_token.toString()
                  },
            body: JSON.stringify(rdata)
        });

        const data = await res.json()
        
        if(!res.ok){
          alert(data)

        }else{
          console.log('Response:', data);
          alert(`Questions have been created`);
        //   props.fetcher(token);
        //   props.renderer();
        //   props.fetcher(token);
        //   props.renderer();
          // setSpaces(spaces+1);
          // Console.log(spaces);
          // dataPasser(spaces);
          // Props.spaces += 1;
        }
        
    }

    return (
        <section className='bg-gray-100 w-full p-5 h-fit flex flex-col gap-5 items-center'>
            <div className="flex flex-col w-[70%] justify-center items-center gap-5">
            {mcqs.map((mcq, index) => (
                <div className='w-[70%] flex flex-col p-6 gap-5 justify-center items-left shadow-lg bg-white' key={index}>
                    <div className="ques flex gap-3 items-center w-full">
                    <label>Question:</label>
                    <input
                        className='border-[1px] border-gray-400 w-full p-2 cursor-auto'
                        type="text"
                        value={mcq.question}
                        onChange={(event) => handleQuestionChange(event, index)}
                    />
                    </div>
                    {/* <br /> */}
                    {mcq.options.map((option, optionIndex) => (
                        <div className='flex gap-3 items-center' key={optionIndex}>
                            <label>{`Option ${optionIndex + 1}:`}</label>
                            <input
                                className='border-[1px] border-gray-400 w-[50%] p-2 cursor-auto'
                                type="text"
                                value={option}
                                onChange={(event) => handleOptionChange(event, index, optionIndex)}
                            />
                        </div>
                    ))}
                    <div className="addoption flex justify-center">
                    <button className='p-2 flex hover:bg-slate-100 hover:shadow-lg hover:border-[1px] hover:border-gray-300 hover:scale-[120%] transition-all' onClick={() => addOption(index)}>
                    {<IoAdd className='scale-[200%]'/>}
                    </button>
                    </div>
                    <div className="ans flex gap-3 items-center">
                    <label>Correct Answer:</label>
                    <select
                        className='w-[12rem] p-2'
                        value={mcq.correctAnswer}
                        onChange={(event) => handleCorrectAnswerChange(event, index)}
                    >
                        <option value="">Select Correct Answer</option>
                        {mcq.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>{option}</option>
                        ))}
                    </select>
                    </div>
                    {/* <hr /> */}
                </div>
            ))}
            
            <button className='border-2 border-gray-300 p-3 hover:bg-slate-100 hover:shadow-lg hover:border-[1px] hover:border-gray-300 hover:scale-[120%] transition-all' onClick={addMcq}>Add Another Question</button>
            </div>
            <button className='bg-[#76FF7A] text-black font-bold text-[1.2rem] h-[2.5rem] w-[7rem] border-[1px] border-solid hover:border-2 hover:border-black' onClick={handleSubmit}>
                Create
            </button>
        </section>
    );
};

export default CreateMCQ;
