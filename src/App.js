import React, {useState} from 'react';
import logo from './logo.svg';
import ic_sun from './images/weather/ic_sun.svg';
import ic_half_sun from './images/weather/ic_half_sun.svg';
import ic_snow from './images/weather/ic_snow.svg';
import ic_water from './images/weather/ic_water.svg';
import ic_waters from './images/weather/ic_waters.svg';
import ic_sky from './images/weather/ic_sky.svg';
import ic_lightning from './images/weather/ic_lightning.svg';
import temp_1 from './images/weather/ic_thermometer_1.svg';
import temp_2 from './images/weather/ic_thermometer_2.svg';
import temp_3 from './images/weather/ic_thermometer_3.svg';
import temp_4 from './images/weather/ic_thermometer_4.svg';
import temp_5 from './images/weather/ic_thermometer_5.svg';
import temp_6 from './images/weather/ic_thermometer_6.svg';
import Weather from './components/Weather.js';
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
        <div className="grid left">
          <div className="grid topleft">
              <div className="sliderbox_upper">
              </div>

              <div className="sliderbox_under">
                <Switchsimple className = "switchsimple" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchsimple className = "switchsimple" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchsimple className = "switchsimple" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchsimple className = "switchsimple" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchsimple className = "switchsimple" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchsimple className = "switchsimple" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchsimple className = "switchsimple" isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
              </div>
          </div>
        <div className="grid bottomleft">
            <div className="sliderbox_weather">
              <div className="grid weather mon"><Weather className= "weather" weather_svg = {ic_sun}/></div>
              <div className="grid weather tue"><Weather className= "weather" weather_svg = {ic_half_sun}/></div>
              <div className="grid weather wed"><Weather className= "weather" weather_svg = {ic_lightning}/></div>
              <div className="grid weather thu"><Weather className= "weather" weather_svg = {ic_sky}/></div>
              <div className="grid weather fri"><Weather className= "weather" weather_svg = {ic_water}/></div>
              <div className="grid weather sa"><Weather className= "weather" weather_svg = {ic_waters}/></div>
              <div className="grid weather so"><Weather className= "weather" weather_svg = {ic_snow}/></div>

              <div className="grid temperature mon"><img src={temp_1} className="temperature" alt="temperature" /></div>
              <div className="grid temperature tue"><img src={temp_2} className="temperature" alt="temperature" /></div>
              <div className="grid temperature wed"><img src={temp_3} className="temperature" alt="temperature" /></div>
              <div className="grid temperature thu"><img src={temp_4} className="temperature" alt="temperature" /></div>
              <div className="grid temperature fri"><img src={temp_5} className="temperature" alt="temperature" /></div>
              <div className="grid temperature sa"><img src={temp_6} className="temperature" alt="temperature" /></div>
              <div className="grid temperature so"><img src={temp_1} className="temperature" alt="temperatures" /></div>

              <div className="grid daytext mon">Monday</div>
              <div className="grid daytext tue">Tuesday</div>
              <div className="grid daytext wed">Wednesday</div>
              <div className="grid daytext thu">Thursday</div>
              <div className="grid daytext fri">Friday</div>
              <div className="grid daytext sa">Saturday</div>
              <div className="grid daytext so">Sunday</div>
            </div>
          </div>
          </div>
        <div className="grid right">
                <div className="header"><h1>SMARTHOME</h1></div>
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
