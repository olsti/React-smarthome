import React from 'react';
import "./Switchsimple.css";

const Switchsimple = ({isOn, turnOn}) => {
    return (
        <label className="switchsimple">
            <input type="checkbox" checked={isOn} onChange={turnOn}/>
            <span className="switchslidersimple"/>
        </label>
    );
};

export default Switchsimple
