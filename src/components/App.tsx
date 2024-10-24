import React, { ChangeEventHandler, useState} from 'react';

import Timeline from './Timeline';
import TestComponent from './testComponent';
import Options, {optionsType, EventsOptions} from '../timeline/components/Options';

import '../styles/App.css';
import Sidebar from './Sidebar';

function App() {
  const [options, setOptions] = useState<optionsType>({EventsToDisplay:EventsOptions.all})
  const [accordiansExpanded, setAccordiansExpanded] = useState(false);

  const setEventsToDisplay:ChangeEventHandler<HTMLInputElement> = (e:any) => {
    setOptions({...options, EventsToDisplay:e.target.value})
  }

  const toggleAccordians = ()=>{console.log("flip");setAccordiansExpanded(!accordiansExpanded)}

  return (
    <div className="App">
      
      <h1>BattleTech timeline</h1>

      <Sidebar>
      <Options
        EventsToDisplay={options.EventsToDisplay}
        setEventsToDisplay={setEventsToDisplay}
        toggleAccordians={toggleAccordians}
      />
      </Sidebar>
      
      <Timeline
        options={options}
        accordiansExpanded={accordiansExpanded}
      />

      {/* <hr/>
      <TestComponent/> */}
      <hr/>
      <div>resources:</div>
      <div>websites used:</div>
      <div>https://www.sarna.net/wiki/Timeline</div>
      <div>https://bg.battletech.com/new-to-the-board-game/battletech-eras/</div>
      <div>https://mwo.fandom.com/wiki/Timeline</div>
    </div>
  );
}

export default App;
