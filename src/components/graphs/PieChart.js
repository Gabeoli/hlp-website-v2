import React, { Component } from 'react'
import Chart from "chart.js"

//Chart Style Options
Chart.defaults.global.defaultFontFamily = "'Gotham', sans-serif"

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
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="pieChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
export default PieChart