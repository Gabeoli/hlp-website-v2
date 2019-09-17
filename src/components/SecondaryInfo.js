import React, { Component } from 'react'
import PieChart from './graphs/PieChart'

class SecondaryInfo extends Component {
    render() {
        return (
            <div className="secondary-info">
                <div class="col-left">
                    <PieChart />

                </div>
                <div class="col-right">

                </div>
            </div>
        )
    }
}

export default SecondaryInfo
