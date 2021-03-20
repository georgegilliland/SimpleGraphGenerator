import React, { useState, useEffect }  from 'react';
import Checkbox from "../Checkbox/index"
import style from '../../pages/results.module.css';

const Dropdown = ({data, handleCheckChildElement}) => {

    const [stateObj, setState] = useState({
        "active": false
    });  

    const mappedDropdownOptions = data.map(option => {
        return (
            <>
                <Checkbox option={option} handleCheckChildElement={handleCheckChildElement}/>
            </>
        )
    })

    // displays / hides dropdown 
    const toggleDropdown = () => {
        let tmpState = {...stateObj};
        tmpState.active = !stateObj.active;
        setState(tmpState);
    }

    return <div className={style.DropdownContainer}>
        <div className={style.Dropdown} onClick={e => toggleDropdown(e)}>Graph types</div>
        <div className={stateObj.active ? style.Visible : style.Hidden}>
            {mappedDropdownOptions}
        </div>
    </div>

}

export default Dropdown;
