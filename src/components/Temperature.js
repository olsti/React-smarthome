import React from 'react';
import './Temperature.css';

const Temperature = ({temp_svg}) => {
    return (
        <img src={temp_svg} className="temperature" alt="temperature" />
      );
}

export default Temperature;