import React from 'react';
import './Buttonbox.css'
import Switchround from "./Switchround";

const Buttonbox = ({isOn, turnOn, text}) => {
    return (
        <label className="buttonbox">
            <Switchround isOn={isOn} turnOn= {turnOn}/>{text}
        </label>
    )
}

export default Buttonbox;
