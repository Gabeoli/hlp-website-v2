import React, { Component } from 'react'
import BarChart from "./graphs/BarChart"
import Ticker from './ticker/Ticker'
import Duration from './Duration'

class InfoRow extends Component {
    render() {
        return (
            <div className="info-row">
                <div className="row-object">
                    <div className="content ticker">
                        <h1>Community Responses</h1>
                        <Ticker/>
                    </div>
                </div>
                <div className="row-object">
                    <div className="content">
                        <h1>Something Here</h1>
                        <BarChart />
                    </div>
                </div>
                <div className="row-object">
                    <div>
                        <div className="content col-child">
                            <Duration/>
                        </div>
                        <div className="content col-child">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default InfoRow