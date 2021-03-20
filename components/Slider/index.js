import React, { useState, useEffect }  from 'react';
import style from './Slider.module.css';

const Slider = ({handleSliderChange, title, min, max, step}) => {

    const [stateObj, setState] = useState({
        "step": 50,
    });

    // Updates slider value and sends back to parent component
    const toggleSlider = (e) => {
        setState({
            "step": e.target.value
        })
        handleSliderChange(e.target.value / 100)
    }

    return (
        <div>
            <div className={style.SliderTitle}>{title}</div>
            <input className={style.Slider} type="range" min={min} max={max} value={stateObj.step} step={step} onChange={e => toggleSlider(e)}/>
        </div>
    )
};

export default Slider;
