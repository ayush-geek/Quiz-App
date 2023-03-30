import React from 'react'
import '../App.css';
import { useContext } from 'react';
import { GameStateContext } from '../helpers/context';

const Menu = () => {
   const {gameState,setGameState,user,setUser} =useContext(GameStateContext);
  return (
    <div className='Menu'>
        <label>Enter your name:</label>
        <input type="text" placeholder='Ex: Ayush Malviya' 
        onChange={(event)=>setUser(event.target.value)}/>
        <button onClick={()=>{
            
            setGameState("playing")
        }}>Start Quiz</button>
        
    </div>
  )
}

export default Menu