import React, {
    Component,
    memo,
    useCallback,
    useState,
    useEffect,
    useMemo
  } from "react";
  import "./RangeSlider.css";

const MultiRangeSlider = () => {

    return (
        <>
        <input
        type="range"
        min="0"
        max="1000"
        className="thumb thumb--left"
        />
        <input
        tpye="range"
        min="0"
        max="1000"
        className="thumb thumb--right"
        />
        </>
    );
};

export default MultiRangeSlider