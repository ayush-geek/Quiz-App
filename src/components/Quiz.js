import React from 'react'
import '../App.css'
import {Questions} from '../helpers/Questions'
import { useState } from 'react'

import { useContext } from 'react';
import { GameStateContext } from '../helpers/context';

const Quiz = () => {
   const {gameState,setGameState,user,setUser,score,setScore} =useContext(GameStateContext);

    const [curQues,setCurQues] = useState(0);
    const [optionChosen,setOptionChosen]=useState("");
    const nextQuestion=()=>{
            if(optionChosen===Questions[curQues].answer)
                {
                    setScore(score+1);
                }
            
            
                setCurQues(curQues+1);
           
    }

    const finishQuiz=()=>{
        if(optionChosen===Questions[curQues].answer)
                {
                    setScore(score+1);
                }
        setGameState("finished");
    } 


  return (
    <div className='Quiz'>
       <h1>{Questions[curQues].prompt}</h1>
       <div>
            <button onClick={()=>{setOptionChosen("optionA")}}>{Questions[curQues].optionA}</button>
            <button onClick={()=>{setOptionChosen("optionB")}}>{Questions[curQues].optionB}</button>
            <button onClick={()=>{setOptionChosen("optionC")}}>{Questions[curQues].optionC}</button>
            <button onClick={()=>{setOptionChosen("optionD")}}>{Questions[curQues].optionD}</button>
            
       </div>
       {
        curQues===Questions.length-1?
        <button onClick={finishQuiz} id="nextQuestion">Finish Quiz</button>:
        <button onClick={nextQuestion} id="nextQuestion">Next</button>
       }
      
       
    </div>
  )
}

export default Quiz