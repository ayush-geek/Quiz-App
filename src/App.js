import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';
import { GameStateContext } from './helpers/context';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
//menu playing ifnished

function App() {
  const [gameState, setGameState] = useState('menu');
  const [user, setUser] = useState('');
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>

      <GameStateContext.Provider value={{ gameState, setGameState, user, setUser, score, setScore }}>
        
         { gameState === 'menu' && < Menu />}
        
        {gameState === 'playing' && <Quiz />}
        {gameState === 'finished' && <EndScreen />}

      </GameStateContext.Provider>
    </div>
  );
}

export default App;
