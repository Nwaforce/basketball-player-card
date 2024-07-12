// src/App.jsx
import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';
import LeBron from './image/LeBron.webp';


function App() {
  return (
    <div className="App">
      <BasketballPlayerCard
        name="LeBron James"
        image={LeBron}
        position="Forward"
        stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
      />
    </div>
  );
}

export default App;
