import React, { Component } from 'react'
import BarChart from "./graphs/BarChart"

class InfoRow extends Component {
    render() {
        return (
            <div className="info-row">
                <div className="row-object">
                    <h1>Col 1</h1>
                </div>
                <div className="row-object">
                    <BarChart />
                </div>
                <div className="row-object">
                    <h1>Col 3</h1>
                </div>
            </div>
        )
    }
}


export default InfoRow