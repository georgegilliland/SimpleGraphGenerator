import React, { useState, useEffect }  from 'react';
import { useRouter } from 'next/router';
import ResultsHeader from "../components/ResultsHeader";
import Components from "./api/visualizations"
import BarChart from "../components/Visualisations/BarChart";
import PieChart from "../components/Visualisations/PieChart";
import style from "./results.module.css";

const Results = () => {
    const [stateObj, setState] = useState({
        "file": false,
        "redirect": false,
        "data": "",
        "options": []
    });

    // Converts CSV to arr of objects
    const convertCSVToArrOfObjects = (bufferString) => {
        var arr = bufferString.split('\n'); 
        var jsonObj = [];
        var headers = arr[0].split(',');
        for(var i = 1; i < arr.length; i++) {
          var data = arr[i].split(',');
          var obj = {};
          for(var j = 0; j < data.length; j++) {
             obj[headers[j].trim()] = data[j].trim();
          }
          jsonObj.push(obj);
        }
        return jsonObj;
    };

    // Once component is mounted run convertCSVToArrOfObjects() and set state
    useEffect(() => {
        /*
        */
        let tmpStateObj = {...stateObj};
        let data = localStorage.getItem("graphData");
        let options = localStorage.getItem("graphOptions");
        if (data && options) {
            tmpStateObj.data = JSON.stringify(convertCSVToArrOfObjects(data, ','));
            tmpStateObj.options = JSON.parse(options);
            setState(tmpStateObj);
        }
    }, []);

    return  <div className={style.ResultsContainer}>
        <ResultsHeader />
        <div className={style.ResultsInnerContainer}>
            {stateObj.options.map((option) => {
                const Component = Components[option.value];
                return <Component data={stateObj.data}/>;
            })}
        </div>
    </div>

}

export default Results;
