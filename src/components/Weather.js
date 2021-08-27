import React from 'react';
import './Weather.css';

const Weather = ({weather_svg}) => {
    return (
        <img src={weather_svg} className="weather" alt="weather" />
      );
}

export default Weather;