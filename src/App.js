import './App.css';
import Header from './components/Header';
import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
        <Header/>
        
        <div className='board'>
            <Board/>
        </div>
    </div>
  );
}

export default App;
