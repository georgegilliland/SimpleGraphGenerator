import React, { useState, useEffect }  from 'react';
import FileInput from "../components/FileInput";
import Dropdown from "../components/Dropdown";
import style from "./index.module.css";
import graphTypes from "./api/graphTypes.json"

function HomePage() {

    console.log(graphTypes)

    const [stateObj, setState] = useState({
        "file": false,
        "redirect": false,
        "data": "",
        "options": graphTypes.options
    });

    // Set file key in state to true if successful upload
    const handleFileRead = (e) => {
        let tmpStateObj = {...stateObj};
        tmpStateObj.file = true;
        tmpStateObj.data = e.data.result;
        setState(tmpStateObj);
        console.log(tmpStateObj.data)
    }

    const handleCheckChildElement = (e) => {
        let tmpStateObj = {...stateObj}
        tmpStateObj.options.forEach(option => {
           if (option.value === e.target.value)
              option.checked = e.target.checked
        })
        setState(tmpStateObj)
    }  

    return <div className={style.TitlePageMainContainer}>
        <div className={style.InnerTitlePageMainContainer}>
            <div className={style.TitlePageTitle}>Simple Graphs, Innit</div>
            <div className={style.TitlePageButtonContainer}>
                <FileInput handleFileRead={handleFileRead}/>
                <Dropdown data={stateObj.options} handleCheckChildElement={handleCheckChildElement}/>
            </div>
        </div>
    </div>
}
  
export default HomePage