import React from 'react';
import './Slider.css';

const Slider = ({img_src}) => {
    return (
        <img src={img_src} className="slider" alt="slider" />
      );
}

export default Slider;