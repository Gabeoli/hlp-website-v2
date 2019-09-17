import React, { Component } from 'react'
import BarChart from "./graphs/BarChart"

class InfoRow extends Component {
    render() {
        return (
            <div className="info-row">
                <div className="row-object">
                    <div className="content">

                    </div>
                </div>
                <div className="row-object">
                    <div className="content">
                        <h1>Something Here</h1>
                        <BarChart />
                    </div>
                </div>
                <div className="row-object">
                    <div className="content">
                        <h1>Waddup bih</h1>
                    </div>
                </div>
            </div>
        )
    }
}


export default InfoRow