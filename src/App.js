import React, {useState} from 'react';

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
        <div className="container left">
          <div className="container topleft">
            <div className="sliderbox">
              <div className="sliderbox_upper">
              </div>

              <div className="sliderbox_under">

                <div className="box red">
                <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>
                <div className="box blue">
                <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>
                <div className="box green">
                <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>
                <div className="box violet">
                <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>
                <div className="box orange">
                <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>
                <div className="box yellow">
                <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>
                <div className="box tur">
                <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>

              </div>
            </div>

          </div>
        <div className="container bottomleft">
          <div className="sliderbox">
            <div className="sliderbox_upper">
            </div>

            <div className="sliderbox_under">

              <div className="box red">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div className="box blue">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div className="box green">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div className="box violet">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div className="box orange">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div className="box yellow">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              <div className="box tur">
              <Switchsimple className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
              
            </div>
          </div>
          </div>
        </div>
        <div className="header"><h1>LIFESTYLE LIVING</h1></div>
        <div className="container right">
            <div className="box 1">
                <div className="box 11">
                <Switchround className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>
                <div className="box 12">
                <Switchround className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>
                <div className="box 13">
                <Switchround className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                </div>
            </div>
            <div className="box 2">
                <Switchround className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchround className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchround className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
            </div>
            <div className="box 3">
                <Switchround className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchround className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchround className = "switch1" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
