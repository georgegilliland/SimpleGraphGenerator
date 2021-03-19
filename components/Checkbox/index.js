import React, { useState, useEffect }  from 'react';
import './Checkbox.module.css';

const Checkbox = ({option, handleCheckChildElement}) => {
    return (
        <div>
          <div>{option.label}</div>
            <input key={option.value} type="checkbox" checked={option.checked} 
                value={option.value} onClick={handleCheckChildElement}/> 
        </div>
      )
};

export default Checkbox;
