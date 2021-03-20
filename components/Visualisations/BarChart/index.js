import React, { useState, useEffect }  from 'react';
import * as d3 from "d3";
import CustomizeDropdown from '../../CustomizeDropdown';
import sortingOptions from "../../../pages/api/sortingOptions.json";
import colourOptions from "../../../pages/api/singleColourOptions.json";
import style from '../../../pages/results.module.css';

const BarChart = ({data}) => {

    const [stateObj, setState] = useState({
        "height": null,
        "width": null,
        "canvas": null,
        "scales": null
    });

    // Create canvas 
    const setCanvas = () => {
        const margin = {top: 30, right: 30, bottom: 50, left: 30},
        width = 400,
        height = 350;
        
        let svg = d3
            .select("#InnerBarChart")
            .append("svg")
                .attr("viewBox", "0 0 700 500")
                .attr('preserveAspectRatio', 'xMinYMin meet')
                .attr(
                    'viewBox',
                    '0 0 ' +
                    (width + margin.left + margin.right) +
                    ' ' +
                    (height + margin.top + margin.bottom)
                )
                .style("color", "#000000") 
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        return svg;
    }

    // Create X axis & Y axis scales
    const setScales = (data) => {
        let columnOne = Object.keys(data[0])[0];
        let columnTwo = Object.keys(data[0])[1];
        let xRange = [ 0, 400 ];
        let yRange = [ 350, 0]; 

        let xScale = d3.scaleBand()
            .range(xRange)
            .domain(data.map(function(d){
                return d[columnOne];
            }))
            .padding(0.1);
      
        let yScale = d3.scaleLinear()
            .domain([0, Math.max.apply(Math, data.map(function(o) { 
                return o[columnTwo]; 
            })) + 10])
            .range(yRange)

        return { xScale: xScale, yScale: yScale, xRange: xRange, yRange: yRange };
    }

    // Append X and Y axis to canvas
    const setAxesToCanvas = (canvas, scales) => {
        canvas.append("g")
            .attr("transform", "translate(0," + 350 + ")")
            .attr("class", "XAxis")
            .call(d3.axisBottom(scales.xScale).tickFormat(""));       
      
        canvas.append("g")
            .attr("class", "YAxis")
            .call(d3.axisLeft(scales.yScale));
    }
    
    // Append bars to canvas
    const setBarsToCanvas = (canvas, scales, data) => {
        let columnOne = Object.keys(data[0])[0];
        let columnTwo = Object.keys(data[0])[1];

        canvas.selectAll("mybar")
            .data(data)
            .enter()
            .append("rect")
                .attr("class", "BarchartBars")
                .attr("x", function(d) { return scales.xScale(d[columnOne]); })
                .attr("y", function(d) { return scales.yScale(d[columnTwo]); })
                .attr("width", scales.xScale.bandwidth())
                .attr("height", function(d) { return 350 - scales.yScale(d[columnTwo]); })
                .style("fill", "#576675")

        canvas.selectAll(".BarLabel")
            .data(data)
                .enter()
            .append("text")
            .classed("BarLabel", true)
                .attr("text-anchor","left")
                .text(function(d){return d[columnOne]})
                .attr("transform", function(d, i) {
                    return "translate(" + (scales.xScale(d[columnOne]) + scales.xScale.bandwidth() / 2 - 3) + "," + (350 + 20) + ")"
                })       
                
        // Update state for update funcations
        let tmpStateObj = {...stateObj};
        tmpStateObj.canvas = canvas;
        tmpStateObj.height = 350;
        tmpStateObj.scales = { xScale: scales.xScale, yScale: scales.yScale, xRange: scales.xRange, yRange: scales.yRange }
        setState(tmpStateObj)
    }

    const handleDropdownChange = (val) => {
        let columnOne = Object.keys(JSON.parse(data)[0])[0];
        let columnTwo = Object.keys(JSON.parse(data)[0])[1];
        let tmpData = JSON.parse(data);

        if (val === "ascending") {
            tmpData.sort((a, b) => Number(a[columnTwo]) - Number(b[columnTwo]))
        } else if (val === "descending") {
            tmpData.sort((a, b) => Number(b[columnTwo]) - Number(a[columnTwo]))
        } else if (val === "key") {
            tmpData.sort((a, b) => a[columnOne].localeCompare(b[columnOne]))
        } else {
            tmpData = JSON.parse(data);
        }

        stateObj.scales.xScale.domain(tmpData.map(function(d) {
            return d[columnOne];
        }));

        stateObj.canvas.selectAll("rect")
            .transition()
            .duration(500)
            .attr("x", function(d, i) {
                return stateObj.scales.xScale(d[columnOne]);
            })  
        
        stateObj.canvas.selectAll(".bar-label")
            .transition()
            .duration(500)
            .attr("transform", function(d, i) {
                return "translate(" + (stateObj.scales.xScale(d[columnOne]) + 
                    stateObj.scales.xScale.bandwidth() / 2 - 3) + "," + (stateObj.height + 20) + ")"
            })
    }

    // Bar colour change
    const handleDropdownColourChange = (val) => {
        d3.selectAll("rect")
            .transition()
            .duration(500)
            .style("fill", val)
    }

    // Once component has mounted, this prevents the graph from being repeatedly displayed
    useEffect(() => {
        if (data) {
            console.log(data)
            let canvas = setCanvas();
            let scales = setScales(JSON.parse(data));
            setAxesToCanvas(canvas, scales)
            setBarsToCanvas(canvas, scales, JSON.parse(data))
        }
    }, [data]);

    return (
        <div className={style.Chart}>
            <div className={style.GraphTitle}>
                BarChart
            </div>
            <div id="InnerBarChart"></div>
            <div className={style.ButtonContainer}>
                <CustomizeDropdown handleDropdownChange={handleDropdownChange} 
                data={sortingOptions.options} type="sort" text="Sort by..." width={"125px"}/>
                <CustomizeDropdown handleDropdownChange={handleDropdownColourChange} 
                data={colourOptions.options} type="colour" text="Change Colour" width={"125px"}/>
            </div>
        </div>
    )
};

export default BarChart;
