import React, { useState, useEffect } from 'react';
import './index.css'

const GreenLightRedLight = ({ user, onGameEnd }) => {
  const [score, setScore] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const n = user.difficulty === 'Easy' ? 10 : user.difficulty === 'Medium' ? 15 : 25;
  const y = 40; // seconds

  useEffect(() => {
    if (isGameStarted && !isGameOver) {
      const timer = setTimeout(() => {
        setIsGameOver(true);
        onGameEnd(score >= n);
      }, y * 1000);

      return () => clearTimeout(timer);
    }
  }, [isGameStarted, isGameOver, score, n, onGameEnd]);

  const handleBoxClick = () => {
    if (isGameStarted && !isGameOver) {
      setScore(score + 1);
    }
  };

  const renderGame = () => {
    if (!isGameStarted) {
      return (
        <div className="start-button">
          <button onClick={() => setIsGameStarted(true)}>Start Game</button>
        </div>
      );
    } else {
      return (
        <div className={`game ${isGameOver ? 'game-over' : score % 2 === 0 ? 'green' : 'red'}`}>
          <div className="box" onClick={handleBoxClick}></div>
          {isGameOver && (
            <div className="result">
              {score >= n ? 'You win!' : 'Game Over!'}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="green-light-red-light-game">
      <h2>Welcome, {user.name}!</h2>
      {renderGame()}
    </div>
  );
};

export default GreenLightRedLight;
