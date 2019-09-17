import React, { Component } from 'react'
import Chart from "chart.js"

//Chart Style Options

class PieChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        data: [86, 67, 91],
                        backgroundColor:[
                            '#FFD100',
                            '#44BFEF',
                            '#2A2A2A'
                        ],
                        backgroundColor:[
                            '#FFD100',
                            '#44BFEF',
                            '#2A2A2A'
                        ],
                    }
                ]
            },
            options: {
                responsive: true,
                elements:{
                    arc:{
                        borderWidth: 0
                    }
                },
                legend:{
                    position: 'bottom',
                    labels: {
                        boxWidth: 20,
                        padding: 50
                    }
                }
            }
        });
    }
    render() {
        return (
            <div className="pie-chart">
                <div className="text-container">
                    <h1>Graph Title</h1>
                    <p>What would you like to see more of?</p>
                </div>
                <div className="chart-container">
                    <canvas
                        id="pieChart"
                        ref={this.chartRef}
                    />
                </div>
            </div>
        )
    }
}
export default PieChart