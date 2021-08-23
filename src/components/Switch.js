import React from 'react';
import "./Switch.css";

const Switch = ({isOn, turnOn}) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={isOn} onChange={turnOn}/>
            <span className="switchslider"/>
        </label>
    );
};

export default Switch
