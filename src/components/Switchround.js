import React from 'react';
import "./Switchround.css";

const Switchround = ({isOn, turnOn}) => {
    return (
        <label className="switchround">
            <input type="checkbox" checked={isOn} onChange={turnOn}/>
            <span className="switchsliderround"/>
        </label>
    );
};

export default Switchround
