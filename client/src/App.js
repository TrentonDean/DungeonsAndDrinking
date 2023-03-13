import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Welcome from './components/Welcome';
import { useState } from 'react';
import ClassSelect from './components/ClassSelect';
import Intro from './components/Intro';

function App() {

  const players = (num) => {            // sets the number of players in session storage so they don't disappear if the page refreshes
    sessionStorage.setItem('num',num)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Welcome onPlayers={players}/>} />
          <Route path='/class-select' element={<ClassSelect/>} />
          <Route path='/intro' element={<Intro/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
