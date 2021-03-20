import React, { useState, useEffect }  from 'react';
import style from './Checkbox.module.css';

const Checkbox = ({option, handleCheckChildElement}) => {
    return (
        <div className={style.DropdownOptionContainer}>
          <div className={style.DropdownOptionInnerContainer}>
              <div>{option.label}</div>
              <input key={option.value} type="checkbox" checked={option.checked} 
                  value={option.value} onClick={handleCheckChildElement}/> 
          </div>
        </div>
      )
};

export default Checkbox;
