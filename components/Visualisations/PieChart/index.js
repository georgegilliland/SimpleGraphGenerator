import React, { useState, useEffect }  from 'react';
import * as d3 from "d3";
import CustomizeDropdown from '../../CustomizeDropdown';
import Slider from "../../Slider";
import multiColourOptions from "../../../pages/api/multiColourOptions.json";
import style from '../../../pages/results.module.css';

const PieChart = ({data}) => {

    const [stateObj, setState] = useState({
        "height": null,
        "width": null,
        "canvas": null,
        "scales": null,
        "radius": null, 
        "arc": null,
        "color": null,
        "columnOne": null,
        "columnTwo": null,
        "data_ready": null,
        "data": null
    });

     // Create canvas 
    const setCanvas = (data) => {
        const margin = {top: 30, right: 30, bottom: 50, left: 30},
        width = 400,
        height = 350;
        
        let svg = d3
            .select("#InnerPieChart")
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
                .attr("transform", "translate(" + 215 + "," + 230 + ")");

        return svg;
    }

    // Creates pie chart data arcs
    const setArcs = (canvas, data) => {
        let columnOne = Object.keys(data[0])[0];
        let columnTwo = Object.keys(data[0])[1];
        let radius = 200 - 40;

        let color = d3.scaleOrdinal()
            .domain(data.map(function(d){
                return d[columnTwo];
            }))
            .range(["#F04C63","#C6C4C4","#51C5DD","#F7F6F6","#0A4F70"]);

        let pie = d3.pie()
            .value(function(d) { return d[columnTwo]; });

        let data_ready = pie(data);

        let arc = d3.arc()
            .innerRadius(radius * 0.5)
            .outerRadius(radius * 0.8);
      
        let outerArc = d3.arc()
            .innerRadius(radius * 0.9)
            .outerRadius(radius * 0.9);

        canvas
            .selectAll('allSlices')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d){ return(color(d.data[columnOne])) })
            .attr("stroke", "white")
            .style("stroke-width", "4px")
            .style("opacity", 0.7)

        canvas
            .selectAll('allPolylines')
            .data(data_ready)
            .enter()
            .append('polyline')
                .attr("stroke", "black")
                .style("fill", "none")
                .attr("stroke-width", 0.5)
                .attr('points', function(d) {
                    let posA = arc.centroid(d) 
                    let posB = outerArc.centroid(d) 
                    let posC = outerArc.centroid(d)
                    let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 
                    posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); 
                    return [posA, posB, posC]
                })   

        canvas
            .selectAll('allLabels')
            .data(data_ready)
            .enter()
            .append('text')
                .attr("class", "pie-labels")
                .text( function(d) { return d.data[columnOne] } )
                .attr('transform', function(d) {
                    let pos = outerArc.centroid(d);
                    let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
                    pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
                    return 'translate(' + pos + ')';
                })
                .style('text-anchor', function(d) {
                    let midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
                    return (midangle < Math.PI ? 'start' : 'end')
                })

        // Update state for update funcations
        let tmpStateObj = {...stateObj};
        tmpStateObj.canvas = canvas;
        tmpStateObj.radius = radius;
        tmpStateObj.arc = arc;
        tmpStateObj.color = color;
        tmpStateObj.columnOne = columnOne;
        tmpStateObj.columnTwo = columnTwo;
        tmpStateObj.data = data;
        setState(tmpStateObj)
    }

    // Handles colour updates
    const handleDropdownColourChange = (val) => {

        let color = d3.scaleOrdinal()
            .domain(stateObj.data.map(function(d){
                return d[stateObj.columnTwo];
            }))
            .range(val.split(","));
        
        stateObj.canvas.selectAll('path')
                .transition()
                .duration(500)
                .style('fill', function(d){ return(color(d.data[stateObj.columnOne])) })
    }

    // Handles radius size updates
    const handleInnerRadiusChange = (val) => {
        let arc = d3.arc()
            .innerRadius(stateObj.radius * val) 
            .outerRadius(stateObj.radius * 0.8);

        stateObj.canvas
            .selectAll("path")
            .attr('d',arc);
    }

    // Once component has mounted, this prevents the graph from being repeatedly displayed
    useEffect(() => {
        if (data) {
            let canvas = setCanvas(JSON.parse(data));
            setArcs(canvas, JSON.parse(data));
        }
    }, [data]);

    return (
        <div className={style.Chart}>
            <div className={style.GraphTitle}>
                Pie-Chart
            </div>
            <div id="InnerPieChart"></div>
            <div className={style.ButtonContainer}>
                <CustomizeDropdown handleDropdownChange={handleDropdownColourChange} 
                    data={multiColourOptions.options} type="colour" text="Change Colour" width={"150px"}/>
                <Slider handleSliderChange={handleInnerRadiusChange} title={"Change radius..."} min={0} max={70} step={10}/>
            </div>
        </div>
    )
};

export default PieChart;
