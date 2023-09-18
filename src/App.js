import React, { useState } from 'react';
import './App.css';
import UserRegistrationForm from './Components/UserRegistrationForm';
import GreenLightRedLight from './Components/GreenLightRedLight';

function App() {
  const [user, setUser] = useState(null);

  const handleStartGame = (userData) => {
    setUser(userData);
  };

  const handleGameEnd = (isWinner) => {
    alert(isWinner ? 'Congratulations! You won!' : 'Game Over!');
    setUser(null);
  };

  return (
    <div className="App">
      <h1>Squid Game: Green Light Red Light</h1>
      {!user ? (
        <UserRegistrationForm onStartGame={handleStartGame} />
      ) : (
        <GreenLightRedLight user={user} onGameEnd={handleGameEnd} />
      )}
    </div>
  );
}

export default App;
