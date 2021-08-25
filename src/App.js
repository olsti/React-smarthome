import React, {useState} from 'react';
import logo from './logo.svg';
import ic_sun from './images/weather/ic_sun.svg';
import ic_half_sun from './images/weather/ic_half_sun.svg';
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
            <div className="sliderbox_upperweather">
            <div className="box mon">
              <img src={ic_sun} className="weather" alt="weather" />
              </div>
              <div className="box thue">
              <img src={ic_half_sun} className="weather" alt="weather" />
              </div>
              <div className="box wed">
              <img src={ic_sun} className="weather" alt="weather" />
              </div>
              <div className="box thur">
              <img src={ic_sun} className="weather" alt="weather" />
              </div>
              <div className="box fri">
              <img src={ic_sun} className="weather" alt="weather" />
              </div>
              <div className="box sat">
              <img src={ic_sun} className="weather" alt="weather" />
              </div>
              <div className="box sun">
              <img src={ic_sun} className="weather" alt="weather" />
              </div>
            </div>
            <div className="sliderbox_under">
              <div className="box mon">
              Monday
              </div>
              <div className="box thue">
              Thuesday
              </div>
              <div className="box wed">
              Wednesday
              </div>
              <div className="box thur">
              Thursday
              </div>
              <div className="box fri">
              Friday
              </div>
              <div className="box sat">
              Saturday
              </div>
              <div className="box sun">
              Sunday
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
