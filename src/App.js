import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

import Button from './components/Button.js';
import Switch from './components/Switch';
import Switchround from './components/Switchround';

const App = () => {
  const [isOn1, setTurnOn1] = useState(false);
  const [isOn2, setTurnOn2] = useState(false);
  const [isOn3, setTurnOn3] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button/> */}
        <Switch isOn={isOn1} turnOn={() => setTurnOn1(!isOn1)}/>
        <h1>{(isOn1) ? "ON" : "OFF"}</h1>
        <Switchround isOn={isOn2} turnOn={() => setTurnOn2(!isOn2)}/>
        <h1>{(isOn2) ? "ON" : "OFF"}</h1>
        <Switchround isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
        <h1>{(isOn3) ? "ON" : "OFF"}</h1>
      </header>
    </div>
  );
}

export default App;
