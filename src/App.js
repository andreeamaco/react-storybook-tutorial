import React from 'react';
import './App.css';

import Title from './components/title/Title';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Button />
      </header>
    </div>
  );
}

export default App;
