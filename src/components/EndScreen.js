import React from 'react'
import '../App.css' 
import { useContext } from 'react';
import { GameStateContext } from '../helpers/context';
import { Questions } from '../helpers/Questions';

const EndScreen = () => {
    const {gameState,setGameState,user,setUser,score,setScore} =useContext(GameStateContext);
  return (
    <div className='Endscreen'>
        <h1>Hey {user} Quiz Finished ur score</h1>
        <h1>{score}/{Questions.length}</h1>

        <button onClick={()=>{
            setScore(0);
            setGameState("menu")
        }}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen