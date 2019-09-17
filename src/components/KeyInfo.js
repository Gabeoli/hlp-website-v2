import React, { Component } from 'react'
import LineChart from "./graphs/LineChart"
import Figures from "./Figures"

class KeyInfo extends Component {
    render() {
        return (
            <div className="key-info">
                <div className="main-graph">
                    <LineChart/>
                </div>
                <div className="main-figures">
                    <Figures label="Total Number of PLayers" number="2310"/>
                    <Figures label="Total Number of PLayers" number="2310"/>
                    <Figures label="Total Number of PLayers" number="2310"/>
                </div>
            </div>
        )
    }
}

export default KeyInfo
