import React, {useState} from 'react';
import './App.css';

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
import slider_todo from './images/slider2.svg';

import Weather from './components/Weather';
import Switchsimple from './components/Switchsimple';
import Temperature from './components/Temperature';
import Daytext from './components/Daytext';
import Buttonbox from './components/Buttonbox';
import Slider from './components/Slider';

const App = () => {
  const [isOn1, setTurnOn1] = useState(false);
  const [isOn2, setTurnOn2] = useState(false);
  const [isOn3, setTurnOn3] = useState(false);
  const [isOn4, setTurnOn4] = useState(false);
  const [isOn5, setTurnOn5] = useState(false);
  const [isOn6, setTurnOn6] = useState(false);
  const [isOn7, setTurnOn7] = useState(false);
  return (
    <div className="App">
      <div className="smarthome">
        <div className="grid left">
          <div className="grid topleft">
              <div className="sliderbox_upper">
                <Slider img_src ={slider_todo}/>
                <Slider img_src ={slider_todo}/>
                <Slider img_src ={slider_todo}/>
                <Slider img_src ={slider_todo}/>
                <Slider img_src ={slider_todo}/>
                <Slider img_src ={slider_todo}/>
                <Slider img_src ={slider_todo}/>
              </div>

              <div className="sliderbox_under">
                <Switchsimple isOn={isOn1} turnOn={() => setTurnOn1(!isOn1)}/>
                <Switchsimple isOn={isOn2} turnOn={() => setTurnOn2(!isOn2)}/>
                <Switchsimple isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)}/>
                <Switchsimple isOn={isOn4} turnOn={() => setTurnOn4(!isOn4)}/>
                <Switchsimple isOn={isOn5} turnOn={() => setTurnOn5(!isOn5)}/>
                <Switchsimple isOn={isOn6} turnOn={() => setTurnOn6(!isOn6)}/>
                <Switchsimple isOn={isOn7} turnOn={() => setTurnOn7(!isOn7)}/>
              </div>
          </div>
        <div className="grid bottomleft">
            <div className="sliderbox_weather">
              <Weather weather_svg = {ic_sun}/>
              <Weather weather_svg = {ic_half_sun}/>
              <Weather weather_svg = {ic_lightning}/>
              <Weather weather_svg = {ic_sky}/>
              <Weather weather_svg = {ic_water}/>
              <Weather weather_svg = {ic_waters}/>
              <Weather weather_svg = {ic_snow}/>

              <Temperature temp_svg = {temp_1}/>
              <Temperature temp_svg = {temp_2}/>
              <Temperature temp_svg = {temp_3}/>
              <Temperature temp_svg = {temp_4}/>
              <Temperature temp_svg = {temp_5}/>
              <Temperature temp_svg = {temp_6}/>
              <Temperature temp_svg = {temp_1}/>

              <Daytext text ="Monday"/>
              <Daytext text ="Tuesday"/>
              <Daytext text ="Wednesday"/>
              <Daytext text ="Thursday"/>
              <Daytext text ="Friday"/>
              <Daytext text ="Saturday"/>
              <Daytext text ="Sunday"/>
            </div>
          </div>
          </div>
        <div className="grid right">
              <div className="header">SMARTHOME</div>
              <div className="bottomright">
                <Buttonbox isOn={isOn1} turnOn={() => setTurnOn1(!isOn1)} text = "Livingroom" />
                <Buttonbox isOn={isOn2} turnOn={() => setTurnOn2(!isOn2)} text = "Sleepingroom" />
                <Buttonbox isOn={isOn3} turnOn={() => setTurnOn3(!isOn3)} text = "Bathroom" />
                <Buttonbox isOn={isOn4} turnOn={() => setTurnOn4(!isOn4)} text = "Kitchen" />
                <Buttonbox isOn={isOn5} turnOn={() => setTurnOn5(!isOn5)} text = "Floor" />
                <Buttonbox isOn={isOn6} turnOn={() => setTurnOn6(!isOn6)} text = "Stairs" />
                <Buttonbox isOn={isOn7} turnOn={() => setTurnOn7(!isOn7)} text = "Children" />
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
