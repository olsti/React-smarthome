import React, {
    memo,
    useState,
    useEffect,
    useRef,
  } from "react";
  import "./RangeSlider.css";

const RangeSlider = memo(
    ({ classes, label, onChange, value, ...sliderProps}) => {
    const [sliderVal, setSliderVal] = useState(0);
    const [mouseState, setMouseState] = useState(null);

    //create and attach the ref to slider__range
    const range = useRef(null);

    //updates state-sliderVal and renders when value is changed
    useEffect(() => {
        setSliderVal(value);
    }, [value]);

    //callback handle, sets the value of slider::e to the state 
    const changeCallback = e => {
        setSliderVal(e.target.value);
    };

    //reRenders when mouseState changes and updates sliderVal on mouseUp
    useEffect(() => {
        if(mouseState === "up") {
            onChange(sliderVal);
        }
    }, [mouseState]);
    console.log("[RangeSlider] Start Rendering");
    return (
        <div className="rangeslider">
            {/* <h4>value: {sliderVal}</h4> */}
            <input
            type="range"
            orient="vertical"
            value={sliderVal}
            {...sliderProps}
            className={`slider ${classes}`}
            id="myRange"
            onChange={changeCallback}
            onMouseDown={() => setMouseState("down")}
            onMouseUp={() => setMouseState("up")}
            />
        <div ref={range} className="rangeslider_range" />
        <div className="rangeslider_value">{sliderVal}</div>
        </div>
    );
}
);

export default RangeSlider