import React, { Component } from 'react'
import Chart from "chart.js"

class BarChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                        backgroundColor: '#44BFEF'
                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: true
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: true
                        }
                    }]
                }

            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="barChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}


export default BarChart
