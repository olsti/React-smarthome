import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

import Button from './components/Button.js';
import Switch from './components/Switch';
import Switchround from './components/Switchround';
import Switchsimple from './components/Switchsimple';
import TemplatePicture from './TemplatePicture';

const App = () => {
  const [isOn1, setTurnOn1] = useState(false);
  const [isOn2, setTurnOn2] = useState(false);
  const [isOn3, setTurnOn3] = useState(false);
  const [isOn4, setTurnOn4] = useState(false);
  return (
    <div className="App">
      <div className="smarthome">
        <div className="container topleft">
          <div className="sliderbox">
            <div className="sliderbox_upper">
            </div>

            <div class="sliderbox_under">

              <div class="box red">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div class="box blue">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div class="box green">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div class="box violet">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div class="box orange">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div class="box yellow">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div class="box tur">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
