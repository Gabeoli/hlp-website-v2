import React, { Component } from 'react'
import PieChart from './graphs/PieChart'
import HorizontalChart from './graphs/HorizontalChart'

class SecondaryInfo extends Component {
    render() {
        return (
            <div className="secondary-info">
                <div class="col-left">
                    <PieChart />

                </div>
                <div class="col-right">
                    <HorizontalChart />
                </div>
            </div>
        )
    }
}

export default SecondaryInfo
