import React, { Component } from 'react'
import Chart from "chart.js"

//Chart Style Options
Chart.defaults.global.defaultFontFamily = "'Gotham', sans-serif"
//

class LineChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                        borderColor: '#FFD100'
                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRation: false,
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
                    id="lineChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}


export default LineChart
