import React from 'react';
import logo from '../styles/logo.svg';
import Timeline from './Timeline';
import '../styles/App.css';

import TestComponent from './testComponent';

function App() {
  return (
    <div className="App">
      
      <div>BattleTech timeline</div>

      <Timeline/>

      {/* <hr/>
      <TestComponent/> */}
      <hr/>
      <div>resources:</div>
      <div>websites used:</div>
      <div>https://www.sarna.net/wiki/Timeline</div>
      <div>https://bg.battletech.com/new-to-the-board-game/battletech-eras/</div>
    </div>
  );
}

export default App;
