import React, { useState, useEffect }  from 'react';
import { useRouter } from 'next/router';
import FileInput from "../components/FileInput";
import Dropdown from "../components/Dropdown";
import style from "./index.module.css";
import graphTypes from "./api/graphTypes.json";

function HomePage() {

    const [stateObj, setState] = useState({
        "file": false,
        "redirect": false,
        "data": "",
        "options": graphTypes.options
    });
    const router = useRouter();

    // Set file key in state to true if successful upload
    const handleFileRead = (e) => {
        let tmpStateObj = {...stateObj};
        tmpStateObj.file = true;
        tmpStateObj.data = e.data.result;
        setState(tmpStateObj);
    }

    const handleCheckChildElement = (e) => {
        let tmpStateObj = {...stateObj}
        tmpStateObj.options.forEach(option => {
           if (option.value === e.target.value)
              option.checked = e.target.checked
        })
        setState(tmpStateObj)
    }  

    const click = (e) => {
        if (stateObj.file === true) {
            let tmpStateObj = {...stateObj};
            tmpStateObj.redirect = true;
            setState(tmpStateObj);
            let options = stateObj.options.filter(x => {if (x.checked === true) return x });
            if (options[0].label === "All") { options = graphTypes.options.slice(1) }
            localStorage.setItem('graphData', stateObj.data);
            localStorage.setItem('graphOptions', JSON.stringify(options));
            router.push({
                pathname: '/results'
            });
        } else {
            alert("No file in input")
        }
    }    

    return <div className={style.TitlePageMainContainer}>
        <div className={style.InnerTitlePageMainContainer}>
            <div className={style.TitlePageTitle}>Simple Graphs, Innit</div>
            <div className={style.TitlePageButtonContainer}>
                <FileInput handleFileRead={handleFileRead}/>
                <Dropdown data={stateObj.options} handleCheckChildElement={handleCheckChildElement}/>
                <button className={style.SubmitButton} type="button" onClick = {e => click(e)}>Submit</button>
            </div>
        </div>
    </div>
}
  
export default HomePage