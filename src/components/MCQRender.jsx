import React from 'react';
import MCQPaper from './MCQpaper';
import {api} from './variables.js'
import { useParams } from 'react-router-dom';


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
    let token = localStorage.getItem("auth_token");
    const [confirm, setconfirm] = React.useState(false);
    
// const [user, setUser] = useState()

const [fmcqs, setfmcqs] = React.useState([]);

const {spaceId} = useParams()
const {colId} = useParams()
const {name} = useParams()
const takenTest = localStorage.getItem(`${colId}`)
// console.log(spaceId)
// console.log(colId)

async function fetchCollections(auth_token){
    
    const res = await fetch(`${api}/space/${spaceId}/mcq/question_list?collectionId=${colId}`,{
        method: "GET",
        
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token "+ auth_token.toString()
                }
        // body: {

        // }
    });

    const data = await res.json()
    
    if(!res.ok){
        alert(data)

    }else{
        // alert(`The join request has been rejected`);
        // console.log(data);
        // setCol(data);
        setfmcqs(data);
        console.log(data);
        // console.log(col);
        
    }  
}


if(takenTest){
    if (takenTest) {
    const userConfirmed = window.confirm("You have already taken this test! Do you want to see the result?");
    setconfirm(userConfirmed)
    if (userConfirmed) {
        console.log("this loc")
      window.location.href=`/dashboard/${spaceId}/${colId}/answersheet`
    } else {
      window.location.href=`/dashboard/${spaceId}/${name}`
    }
    return null; // Prevents further rendering
  }
}



React.useEffect(()=>{

    fetchCollections(token)

},[])

    return (
    <>
        
        <div>
            
            <MCQPaper mcqs={fmcqs} token={token} spaceId={spaceId} api={api} colId={colId} name={name}/>
        </div>
        </>
    );
};

export default MCQRender;
