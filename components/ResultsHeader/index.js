import React, { useState, useEffect }  from 'react';
import style from './ResultsHeader.module.css';

const ResultsHeader = () => {

    return (
        <div className={style.ResultsHeader}>
            <div className={style.InnerResultsHeader}>
                <div className={style.ResultsHeaderTitle}>Simple Graphs, innit</div>
            </div>
        </div>
    )
};

export default ResultsHeader;
