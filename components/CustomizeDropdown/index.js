import React, { useState, useEffect }  from 'react';
import style from '../../pages/results.module.css';

const SortDropdown = ({data, handleDropdownChange, type, text, width}) => {

    const [stateObj, setState] = useState({
        "active": false,
    });

    // Create sorting option divs
    const mappedDropdownOptions = data.map(option => {
        if (Array.isArray(option.value)) {
            let x = option.value.map(item => <div className={style.ColourBlock} style={{backgroundColor: item}}></div>);
            return (
                <div key={option.value} className={style.DropdownOption} data-id={option.value} onClick={e => setDropdownSelection(e)}>
                    {option.label}
                    <div className={style.ColourBlockOuterDiv}>
                        {x}
                    </div>
                </div>
            )
        } else {
            return (
                <div key={option.value} className={style.DropdownOption} data-id={option.value} onClick={e => setDropdownSelection(e)}>
                    {option.label}
                    {type === "colour" ? <div className={style.ColourBlock} style={{backgroundColor: option.value}}></div>: <></>}
                </div>
            )
        }
    })

    // displays / hides dropdown 
    const toggleDropdown = () => {
        let tmpState = {...stateObj};
        tmpState.active = !stateObj.active;
        setState(tmpState);
    }

    // Sets dropdowns selection and passes back to parent component    
    const setDropdownSelection = (e) => {
        handleDropdownChange(e.target.getAttribute('data-id'));
        let tmpState = {...stateObj};
        tmpState.active = !stateObj.active;
        setState(tmpState);
    }
    
    return (
        <div className={style.DropdownContainer} style={{width: width}}>
            <div className={style.Dropdown} onClick={e => toggleDropdown(e)}>{text}</div>
            <div id={style.SortOptions} className={stateObj.active ? style.Visible : style.Hidden} style={{width: width}}>
                {mappedDropdownOptions}
            </div>
        </div>
    )
};

export default SortDropdown;
