import React from 'react';

function Weather({weather_svg}) {
    return (
        <img src={weather_svg} className="weather" alt="weather" />
      );
}

export default Weather;